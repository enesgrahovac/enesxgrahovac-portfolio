import { Pump } from 'basehub/react-pump'
import Markdown from 'react-markdown'

type PrinciplePageProps = {
    //   title: string;
    //   content: string | undefined;
    slug: string;
};


export const PrinciplePageComponent: React.FC<PrinciplePageProps> = ({ slug }) => {

    return (
        <div>
            <Pump
                draft={false}
                next={{ tags: ['basehub'], revalidate: 1 }}
                queries={[{
                    principles: {
                        items: {
                            _id: true,
                            content: {
                                markdown: true,
                            },
                            _title: true,
                            _slug: true,
                            snippet: true
                        },
                        filter: {
                            _slug: { eq: slug }
                        }
                    },
                }]}
            >
                {async ([data]) => {
                    'use server'
                    console.log('PrinciplesPageContent:', data)
                    if (!data.principles || data.principles.items.length === 0) {
                        return null; // Ensure not to proceed
                    }

                    const [principleData] = data.principles.items;

                    return (
                        <div>
                            <h1>{principleData._title}</h1>
                            {principleData.content?.markdown && <Markdown>{principleData.content.markdown}</Markdown>}
                        </div>
                    )
                }}
            </Pump>
        </div>
    );
};