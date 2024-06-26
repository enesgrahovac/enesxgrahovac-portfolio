import { basehub } from 'basehub'
import { Pump } from 'basehub/react-pump'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { BlogCard } from '@/components/patterns/BlogCard/BlogCard'

// Define the types explicitly for better clarity
type PostItem = {
    _id: string;
    _title: string;
    coverImage: { url: string; rawUrl: string } | null;
    content: { markdown: string };
    publishDate: string;
};

// Type guard for PostItem
function isPostItem(item: any): item is PostItem {
    return item && typeof item._id === 'string' && typeof item._title === 'string';
}

// Type guard for PostItem array
function isPostItemArray(items: any): items is PostItem[] {
    return Array.isArray(items) && items.every(isPostItem);
}

const BlogsPageContent = async () => {
    const { isEnabled: isDraftMode } = draftMode()

    return (
        <Pump
            draft={isDraftMode}
            next={{ tags: ['basehub'] }}
            queries={[
                {
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
                                publishDate: true,
                            },
                        },
                    },
                },
            ]}
        >
            {async ([data]) => {
                'use server'
                if (!data.blog) {
                    notFound()
                    return null; // Ensure not to proceed
                } 
                
                console.log('Data:', data.blog.posts)
                
                const items = data.blog.posts.items;

                // Validate and ensure `items` is an array of PostItem
                if (!isPostItemArray(items)) {
                    console.error('Expected items to be an array of PostItem but got:', items);
                    notFound();
                    return null; // Ensure not to proceed
                }

                return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {items.map((post) => (
                            <BlogCard
                                key={post._id}
                                id={post._id}
                                title={post._title}
                                coverImage={post.coverImage?.url && post.coverImage?.rawUrl ? post.coverImage : undefined}
                                content={post.content.markdown}
                                publishDate={post.publishDate}
                            />
                        ))}
                    </div>
                )
            }}
        </Pump>
    )
}

export default BlogsPageContent;
