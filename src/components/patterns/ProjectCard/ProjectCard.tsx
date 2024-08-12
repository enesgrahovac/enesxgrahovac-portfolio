import styles from './ProjectCard.module.css';
import Image from 'next/image';
import { RichText } from 'basehub/react-rich-text';
import Link from 'next/link';

type ProjectCardProps = {
    id: string;
    title: string;
    coverImage: string | undefined;
    content: string | undefined;
    projectStartDate: string | null;
    slug: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, coverImage, content, projectStartDate, slug }) => {
    /*
     * Add type checks and console logs for better debugging. 
     * It's critical to check the shape and type of `content` and `projectStartDate`.
     */
    console.log('ProjectCard:', { id, title, coverImage, content, projectStartDate });
    console.log("type of publish date", typeof projectStartDate)
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                {coverImage && (
                    <Image
                        src={coverImage}
                        alt={title}
                        fill
                        className={styles.image}
                    />
                )}
            </div>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                { projectStartDate && <div className={styles.date}>
                    {new Date(projectStartDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}

                </div>}
                {content && Array.isArray(content) && (
                    <div className={styles.excerpt}>
                        <RichText>{content}</RichText>
                    </div>
                )}
                <div className={styles.readMore}>
                    <Link href={`/projects/${slug}`} className={styles.readMore}>
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    );
};
