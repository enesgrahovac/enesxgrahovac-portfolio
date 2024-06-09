
import { Pump } from 'basehub/react-pump'
import styles from './PrinciplePage.module.css'
import { RichText } from "basehub/react-rich-text"

type PrinciplePageProps = {
    slug: string;
}

const PrinciplePage: React.FC<PrinciplePageProps> = ({ slug }) => {
    return (
        <div>
            <Pump
                draft={false}
                next={{ tags: ['basehub'], revalidate: 1 }}
                queries={[{
                    principles: {
                        __args: {
                            filter: {
                                _sys_slug: { eq: slug },
                            },
                        },
                        items: {
                            _id: true,
                            content: {
                                json: { content: true },
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
                    if (!data.principles || data.principles.items.length === 0) {
                        return null; // Ensure not to proceed
                    }

                    const [principleData] = data.principles.items;
                    console.log(principleData.content?.json.content, "principleData")
                    return (
                        <div className={styles.principlePage}>
                            <div className={styles.principleHeader}> <h1>{principleData._title}</h1> </div>
                            {
                                principleData.content?.json.content &&
                                <div className={styles.richText}>
                                    <RichText>{principleData.content.json.content}</RichText>
                                </div>
                            }
                        </div>
                    )
                }}
            </Pump>
        </div>
    );
};

export default PrinciplePage;
