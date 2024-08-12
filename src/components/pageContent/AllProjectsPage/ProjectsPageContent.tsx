import { basehub } from 'basehub'
import { Pump } from 'basehub/react-pump'
import { RichText } from 'basehub/react-rich-text'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { ProjectCard } from '@/components/patterns/ProjectCard/ProjectCard'
import styles from './ProjectsPageContent.module.css'

type ProjectItem = {
    _id: string;
    _title: string;
    coverImage: { url: string; rawUrl: string } | null;
    content: { markdown: string };
    projectStartDate: string | null;
};

// Type guard for ProjectItem
function isProjectItem(item: any): item is ProjectItem {
    return item && typeof item._id === 'string' && typeof item._title === 'string';
}

// Type guard for ProjectItem array
function isProjectItemArray(items: any): items is ProjectItem[] {
    return Array.isArray(items) && items.every(isProjectItem);
}

const ProjectsPageContent = async () => {
    const { isEnabled: isDraftMode } = draftMode()

    return (
        <Pump
        
            draft={isDraftMode}
            next={{ tags: ['basehub'], revalidate: 60 }}
            queries={[{
                projects: {
                  items: {
                    _id: true,
                    content: {
                      markdown: true,
                    },
                    _title: true,
                    coverImage: {
                      rawUrl: true,
                    },
                    projectStartDate:true,
                    _slug: true,
                  },
                },
              }]}
        >
            {async ([data]) => {
                'use server'

                if (!data.projects) {
                    notFound()
                    return null; // Ensure not to proceed
                } 
                console.log(data)

                const projectsData = data.projects.items

                if (!isProjectItemArray(projectsData)) {
                    console.error('Expected items to be an array of PostItem but got:', projectsData);
                    notFound();
                    return null; // Ensure not to proceed
                }

                return (
                    <div className={styles.gridContainer}>
                        {projectsData.map((project) => (
                            <ProjectCard
                                key={project._id}
                                id={project._id}
                                title={project._title}
                                coverImage={project.coverImage?.rawUrl}
                                content={project.content?.markdown}
                                projectStartDate={project.projectStartDate}
                                slug={project._slug}
                            />
                        ))}
                    </div>
                )
            }}
        </Pump>
    )
}

export default ProjectsPageContent