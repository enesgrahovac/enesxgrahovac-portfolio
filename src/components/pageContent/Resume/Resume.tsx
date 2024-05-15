// pages/resume.js
import React from 'react';
import { useAppContext } from "@/contexts/AppContext";
import ResumeContent from './ResumeContent';

const ResumePage = () => {
  const { isMobileDevice } = useAppContext();
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {/* {isMobileDevice ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p>To view my resume, please download it <a href="/GRAHOVAC_ENES_ML_ENGINEER_CV.pdf" download>here</a>.</p>
        </div>
      ) : ( */}
        <ResumeContent />
      {/* )} */}
    </div>
  );
};

export default ResumePage;
