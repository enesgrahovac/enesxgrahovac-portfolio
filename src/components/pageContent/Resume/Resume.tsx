import { useAppContext } from "@/contexts/AppContext";
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

const ResumeContent = () => {
  const { isMobileDevice } = useAppContext();
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {isMobileDevice ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p>To view my resume, please download it <a href="/GRAHOVAC_ENES_ML_ENGINEER_CV.pdf" download>here</a>.</p>
        </div>
      ) : (
        <ResumeEmbed />
      )}
    </div>
  );
};

export default ResumeContent;
