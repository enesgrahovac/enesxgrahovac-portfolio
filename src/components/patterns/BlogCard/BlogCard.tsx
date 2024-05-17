import styles from './BlogCard.module.css';
import Image from 'next/image';
import { RichText } from 'basehub/react-rich-text';
import Link from 'next/link';

type CoverImageProps = {
    url: string;
    rawUrl: string;
} | undefined;

type BlogCardProps = {
    id: string;
    title: string;
    coverImage: CoverImageProps;
    content: any;
    publishDate: any;
};

export const BlogCard: React.FC<BlogCardProps> = ({ id, title, coverImage, content, publishDate }) => {
    /*
     * Add type checks and console logs for better debugging. 
     * It's critical to check the shape and type of `content` and `publishDate`.
     */
    console.log('BlogCard:', { id, title, coverImage, content, publishDate });
    console.log("type of publish date", typeof publishDate)
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                {coverImage && (
                    <Image
                        src={coverImage.url}
                        alt={title}
                        fill
                        className={styles.image}
                    />
                )}
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.date}>
                    {new Date(publishDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}

                </div>
                {content && Array.isArray(content) && (
                    <div className={styles.excerpt}>
                        <RichText>{content}</RichText>
                    </div>
                )}
                <div className={styles.readMore}>
                    <Link href={`/blog/${id}`} className={styles.readMore}>
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    );
};
