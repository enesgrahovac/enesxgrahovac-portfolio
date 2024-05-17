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

// export const generateMetadata = async ({
//   params,
// }: {
//   params: { slug: string }
// }): Promise<Metadata> => {
//   const { isEnabled: isDraftMode } = draftMode()
//   const data = await basehub({
//     next: { tags: ['basehub'] },
//     draft: isDraftMode,
//   }).query({
//     index: {
//       postsSection: {
//         posts: {
//           __args: {
//             filter: {
//               _sys_slug: { eq: params.slug },
//             },
//           },
//           items: {
//             _title: true,
//             date: true,
//             body: {
//               plainText: true,
//             },
//           },
//         },
//       },
//     },
//   })

//   const post = data.index.postsSection.posts.items[0]

//   if (!post) notFound()

//   return {
//     title: post._title,
//     description: post.body.plainText.split(' ').slice(0, 24).join(' ') + '...',
//   }
// }

// export const generateStaticParams = async () => {
//   const data = await basehub({ cache: 'no-store' }).query({
//     index: {
//       postsSection: {
//         posts: {
//           items: {
//             _slug: true,
//           },
//         },
//       },
//     },
//   })

//   return data.index.postsSection.posts.items.map((post:any) => {
//     return {
//       params: {
//         slug: post._slug,
//       },
//     }
//   })
// }

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
                    projectStartDate:true
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
                            />
                        ))}
                    </div>
                )
            }}
        </Pump>
    )
}

export default ProjectsPageContent