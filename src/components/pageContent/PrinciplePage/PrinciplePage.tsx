
import { RichText } from 'basehub/react-rich-text';
import { GetStaticProps, GetStaticPaths } from 'next';
import { usePathname } from 'next/navigation';
import Markdown from 'react-markdown'
import { Pump } from 'basehub/react-pump'

type PrinciplePageProps = {
    slug: string;
}


const PrinciplePage: React.FC<PrinciplePageProps> = (slug) => {
    console.log(slug, "context");
    // const slug = "meditate"
    return (
        <div>
            <Pump
                draft={false}
                next={{ tags: ['basehub'], revalidate: 1 }}
                queries={[{
                    principles: {
                        __args: { 
                            filter: { 
                              _slug: { eq: slug },
                            },
                          },
                        items: {
                            _id: true,
                            content: {
                                markdown: true,
                            },
                            _title: true,
                            _slug: true,
                            snippet: true
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

export default PrinciplePage;
