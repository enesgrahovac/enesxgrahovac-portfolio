import { basehub } from 'basehub'
import { Pump } from 'basehub/react-pump'
import { RichText } from 'basehub/react-rich-text'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

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
      next={{ tags: ['basehub'] }}
      queries={[ {
        blog: {
          posts: {
            _id: true,
            _title: true,
            items: {
              _id: true,
              _title: true,
              coverImage: {
                url: true,
                rawUrl: true,
              },
              content: {
                markdown: true,
              },
            },
          },
        },
      } ]}
    >
      {async ([data]) => {
        'use server'
        console.log(data)
        const post = data.blog
        if (!post) notFound()
        const postAsJsonString = JSON.stringify(post)
        return (
          <div>{postAsJsonString}</div>
        )
      }}
    </Pump>
  )
}

export default ProjectsPageContent