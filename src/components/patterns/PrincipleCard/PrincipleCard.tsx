import styles from './PrincipleCard.module.css';
import Image from 'next/image';
import { RichText } from 'basehub/react-rich-text';
import Link from 'next/link';

type PrincipleCardProps = {
    id: string;
    title: string;
    snippet: string;
    slug: string;
    content:string;
};

export const PrincipleCard: React.FC<PrincipleCardProps> = ({ id, title, snippet, slug, content }) => {
    /*
     * Add type checks and console logs for better debugging. 
     * It's critical to check the shape and type of `content` and `projectStartDate`.
     */
    console.log('PrincipleCard:', { id, title, snippet, slug });
    console.log("type of snippet", typeof snippet)

    // const formattedContent = snippet.split('\n');

    // console.log("formattedContent", formattedContent)
    return (
        <div className={styles.card}>
            
            <div className={styles.snippet}>
                <h2 className={styles.title}>{title}</h2>
            
                {snippet && (
                    <div className={styles.excerpt}>
                        {snippet}
                    </div>
                )}
                <div className={styles.readMore}>
                    <Link href={`/principles/${slug}`} className={styles.readMore}>
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    );
};
