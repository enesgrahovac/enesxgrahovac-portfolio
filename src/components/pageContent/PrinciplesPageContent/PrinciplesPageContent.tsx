import { basehub } from 'basehub'
import { Pump } from 'basehub/react-pump'
import { RichText } from 'basehub/react-rich-text'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { PrincipleCard } from '@/components/patterns/PrincipleCard/PrincipleCard'
import styles from './PrinciplesPageContent.module.css'

type ProjectItem = {
    _id: string;
    _title: string;
    // coverImage: { url: string; rawUrl: string } | null;
    content: { markdown: string };
    // projectStartDate: string | null;
};

// Type guard for ProjectItem
function isProjectItem(item: any): item is ProjectItem {
    return item && typeof item._id === 'string' && typeof item._title === 'string';
}

// Type guard for ProjectItem array
function isProjectItemArray(items: any): items is ProjectItem[] {
    return Array.isArray(items) && items.every(isProjectItem);
}

const PrinciplesPageContent = async () => {
    const { isEnabled: isDraftMode } = draftMode()

    const getPrincipleCard = async (project:any) => {
        'use server'
        return (
            <PrincipleCard
                key={project._id}
                id={project._id}
                title={project._title}
                // coverImage={project.coverImage?.rawUrl}
                content = {project.content.markdown}
                snippet={project.snippet}
                slug={project._slug}
                // projectStartDate={project.projectStartDate}
            />
        )
    }



    return (
        <Pump
        
            draft={isDraftMode}
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
                    snippet:true
                  },
                },
              }]}
        >
            {async ([data]) => {
                'use server'
                console.log('PrinciplesPageContent:', data)
                if (!data.principles) {
                    notFound()
                    return null; // Ensure not to proceed
                } 

                console.log("data", data)

                const projectsData = data.principles.items

                if (!isProjectItemArray(projectsData)) {
                    console.error('Expected items to be an array of PostItem but got:', projectsData);
                    notFound();
                    return null; 
                }

                return (
                    <div className={styles.gridContainer}>
                        {projectsData.map((project) => (
                            getPrincipleCard(project)
                        ))}
                    </div>
                )
            }}
        </Pump>
    )
}

export default PrinciplesPageContent