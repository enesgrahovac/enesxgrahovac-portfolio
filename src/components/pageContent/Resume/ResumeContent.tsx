// components/ResumeContent.js
import React from 'react';
import styles from './Resume.module.css';
import Button from "@/components/patterns/Button/Button";
import { Download } from "lucide-react";
import { useAppContext } from "@/contexts/AppContext";

const ResumeContent = () => {
    const { isMobileDevice } = useAppContext();

    return (
        <div className={styles.container}>
            <div className={styles.downloadBtn}>
                <Button
                    variant="ghost"
                    label="Download Resume"
                    icon={<Download />}
                    onClick={() => {
                        window.open("/GRAHOVAC_ENES_ML_ENGINEER_CV.pdf", "_blank");
                    }}
                />
            </div>

            <div className={styles.page}>
                <header className={styles.header}>
                    <h1>Enes Grahovac</h1>
                </header>

                <div className={styles.main}>
                    <h2>Experience</h2>

                    <h3>
                        {isMobileDevice ? "Sr. MLE (NLP), Typpo" : "Senior Machine Learning Engineer (NLP), Typpo"} <span className={styles.right}>Q4 2022-Present</span>
                    </h3>
                    <p>Typpo is the first voice-driven video creation tool, powered by AI.</p>
                    <ul>
                        <li>Developed 6 scalable APIs on AWS for Text-to-Speech, Speech-to-Text, Speech-to-Speech, Image Generation, and Text Generation, handling 1000+ daily requests.</li>
                        <li>Trained on-device iOS models for text and speech classification with over 1MM examples over 14 classifications.</li>
                    </ul>

                    <h3>
                        {isMobileDevice ? "Founder, Projects" : "Founder, Bootstrapped Projects"} <span className={styles.right}>2019-Present</span>
                    </h3>
                    <p>Founded 3 projects in my free-time.</p>
                    <ul>
                        <li>
                            <a href="https://getmolla.com/" target="_blank" rel="noopener noreferrer">
                                Molla
                            </a>{' '}
                            – AI-powered site-blocker that uses intelligence to keep you focused on the internet.
                        </li>
                        <li>
                            <a href="https://phonegpt.app/" target="_blank" rel="noopener noreferrer">
                                PhoneGPT
                            </a>{' '}
                            – First app to call and talk with ChatGPT using Phone Call. Added SMS next.
                        </li>

                        <li>
                            <a href="https://book-quest.com/" target="_blank" rel="noopener noreferrer">
                                BookQuest
                            </a>{' '}
                            – AI that creates courses and quizzes from any novel, textbook, and book.
                        </li>
                        <li>FaceR – Doorlock using 3D facial recognition models to unlock. Built hardware and ML models.</li>
                    </ul>

                    <h3>
                        {isMobileDevice ? "MLE (NLP), Speechify" : "Machine Learning Engineer (NLP), Speechify"} <span className={styles.right}>Q3 2021 - Q4 2022</span>
                    </h3>
                    <p>The Speechify app implements text-to-speech ML models to enable users to hear text copy read out loud.</p>
                    <ul>
                        <li>Led analysis strategy for 21M users, identifying key retention metrics; reported to CEO.</li>
                        <li>Developed character voices feature using Quotation Attribution NLP; launched to 10M Apple users.</li>
                        <li>Built a web scraper for 50K books, driving 10x user growth and securing a promotion.</li>
                        <li>Founding engineer on B2B and Voice Overs teams. Launched MVP products then sold first product to Pluto TV.</li>
                    </ul>

                    <h3>
                        {isMobileDevice ? "MLE (contract), bundleIQ" : "Machine Learning Engineer (contract work), bundleIQ"} <span className={styles.right}>Q1 2021 - Q3 2021</span>
                    </h3>
                    <p>bundleIQ is an intelligent notetaking and research platform for content creation.</p>
                    <ul>
                        <li>Trained proprietary NLP models, reducing API costs by 500x and scaling to 250K+ daily calls.</li>
                        <li>Hosted models using AWS Sagemaker, AWS Lambda, and API Gateway, replacing OpenAI's API.</li>
                    </ul>

                    <h3>
                        {isMobileDevice ? "MLE (contract), SMI" : "Machine Learning Engineer (contract work), Systems & Methods, Inc (SMI)"} <span className={styles.right}>Q1 2021 - Q3 2021</span>
                    </h3>
                    <p>SMI is the main child support payment processing, disbursement, and customer service provider for over 13 US states and millions of families.</p>
                    <ul>
                        <li>Researched and evaluated ML models for child support payment extraction.</li>
                        <li>Trained and evaluated deep learning models with a 14M+ invoice dataset using Azure ML Studio.</li>
                        <li>Deployed scalable inference endpoints to service 14M+ million inference requests per year.</li>
                    </ul>

                    <h3>
                        {isMobileDevice ? "Jr. MLE, Rokk3r" : "Junior Machine Learning Engineer, Rokk3r"} <span className={styles.right}>2017 - 2018</span>
                    </h3>
                    <p>Rokk3r was a Miami-based hedge fund that works with the companies they fund to build out technological solutions.</p>
                    <ul>
                        <li>Built job query recommendation engine for Joule.ai using TensorFlow NLP.</li>
                        <li>Scraped and cleaned job listings for ML training datasets.</li>
                    </ul>

                    <h2>Education</h2>

                    <h3>
                        {isMobileDevice ? "BA Physics, UF" : "BA - Physics, University of Florida (UF)"} <span className={styles.right}>August 2019 ‑ July 2021</span>
                    </h3>
                    <ul>
                        <li>Machine Learning Research as Advised by Dr. Damon Woodard</li>
                        <li>GPA: 3.84</li>
                    </ul>

                    <h3>
                        {isMobileDevice ? "BS Physics, FIT" : "BS Physics - Florida Institute of Technology (FIT)"} <span className={styles.right}>August 2016 ‑ May 2017</span>
                    </h3>
                    <ul>
                        <li>High Energy Physics lab researcher</li>
                    </ul>

                    <h2>Skills</h2>
                    <p>Python, TypeScript, PyTorch, Tensorflow, Numpy, Pandas, NextJS, Vercel, SQL, Web Scraping, GCP, AWS</p>

                    <h2>Awards and Recognition</h2>
                    <ul>
                        <li>First Place Winner, Machine Learning 4 Science Hackathon 2020</li>
                        <li>Research Fellowship Awardee, NASA L’Space NPWEE – Awarded $10,000 2020</li>
                    </ul>
                </div>

                <footer className={styles.footer}>
                    <p>&copy; 2024 Enes Grahovac</p>
                </footer>
            </div>
        </div>
    );
};

export default ResumeContent;
