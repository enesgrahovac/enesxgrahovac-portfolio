
import { Pump } from 'basehub/react-pump'
import styles from './ProjectPageContent.module.css'
import { RichText } from "basehub/react-rich-text"

type ProjectPageProps = {
    slug: string;
}


const ProjectPage: React.FC<ProjectPageProps> = ({slug}) => {

    return (
        <div className={styles.projectPageContent}>
            <Pump
                draft={false}
                next={{ tags: ['basehub'], revalidate: 1 }}
                queries={[{
                    projects: {
                        __args: { 
                            filter: { 
                              _sys_slug: {eq: slug},
                            },
                          },
                        items: {
                            _id: true,
                            content: {
                                json: {content:true},
                            },
                            _title: true,
                            _slug: true,
                        }
                    },
                }]}
            >
                {async ([data]) => {
                    'use server'
                    if (!data.projects || data.projects.items.length === 0) {
                        return null; // Ensure not to proceed
                    }

                    const [projectData] = data.projects.items;
                    console.log(projectData.content?.json.content, "projectData")
                    return (
                        <div className={styles.principlePage}>
                            <div className={styles.principleHeader}> <h1>{projectData._title}</h1> </div>
                            
                            {
                                projectData.content?.json.content && 
                                <div className={styles.richText}>
                                    <RichText>{projectData.content.json.content}</RichText>
                                </div>
                            }
                        </div>
                    )
                }}
            </Pump>
        </div>
    );
};

export default ProjectPage;
