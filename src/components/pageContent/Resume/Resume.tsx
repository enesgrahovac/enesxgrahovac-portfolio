import PageLayout from "@/components/PageLayout/PageLayout";
import styles from "./Resume.module.css";

const ResumeEmbed = () => {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <embed
                src="/GRAHOVAC_ENES_ML_ENGINEER_CV.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
            />
        </div>
    );
};

const ResumeContent = ({ }: {}) => {

    return (
        <PageLayout showStaticHeader={true}>
            <div className={styles.wrapper}>
                <h1>My Resume</h1>
                <ResumeEmbed />
            </div>
        </PageLayout>
    );
};

export default ResumeContent;
