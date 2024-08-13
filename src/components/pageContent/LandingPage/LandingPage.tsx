import React, { useEffect } from "react";
// import PageLayout from "@/components/PageLayout/PageLayout";
import styles from "./LandingPage.module.css";
import enesHeadshot from "@/public/img/headshot_presentation.png";
import enesGoat from "@/public/img/enes_goat.png";
import enesAward from "@/public/img/enes_award.png";
import enesFriends from "@/public/img/enes_rockclimbing.png";
// import books from "@/public/img/books_tall_1.png";
// import warAndPeace from "@/public/img/war_and_peace.png";
import Image from "next/image";
import Divider from "@/components/patterns/Divider/Divider";
import Button from "@/components/patterns/Button/Button";
import { Check, Plus, Send } from "lucide-react";
import Link from "next/link";

const LandingPageContent = ({ }: {}) => {
    const [showCopiedMessage, setShowCopiedMessage] = React.useState(false);
    const [showMenuBar, setShowMenuBar] = React.useState(false);

    return (
        
            <div className={styles.wrapper}>
                <div className={styles.main}>
                    <div className={styles.intro}>
                        <h1>Hello, I'm Enes 👋</h1>
                        <h2>
                            I'm an AI & software engineer passionately building amazing AI products 👨‍💻
                        </h2>
                    </div>

                    <div className={styles.exampleSection}>
                        <Image
                            src={enesHeadshot}
                            alt='A photo of Enes Grahovac from his DevDive talk on "how to train your own AI models in a Google Colaboratory notebook using a Huggingface model".'
                            className={styles.exampleImage}
                            id={styles.lightAllow}
                        />
                        <Image
                            src={enesHeadshot}
                            alt='A photo of Enes Grahovac from his DevDive talk on "how to train your own AI models in a Google Colaboratory notebook using a Huggingface model".'
                            className={styles.exampleImage}
                            id={styles.darkAllow}
                        />
                        <div className={styles.exampleText}>
                            <p>I've been working on AIML apps since 2017, and I'm currently looking for a new part-time or full-time position 🤝</p>
                        </div>
                        <Image
                            src={enesAward}
                            alt='A photo of Enes Grahovac receiving his diploma for successfully completing the Dale Carnegie Public Speaking course.'
                            className={styles.exampleImage}
                            id={styles.lightAllow}
                        />
                        <Image
                            src={enesAward}
                            alt='A photo of Enes Grahovac receiving his diploma for successfully completing the Dale Carnegie Public Speaking course.'
                            className={styles.exampleImage}
                            id={styles.darkAllow}
                        />
                        <div className={styles.exampleText}>
                            <p>I'm professionally and personally growth-driven. I want my next career move to be a long-lasting relationship with a growing and innovative company 📈</p>
                        </div>
                        <Image
                            src={enesGoat}
                            alt='A photo of Enes Grahovac at the peak of Mount Blue Sky in Colorado, a mountain goat is on the right.'
                            className={styles.exampleImage}
                            id={styles.lightAllow}
                        />
                        <Image
                            src={enesGoat}
                            alt='A photo of Enes Grahovac at the peak of Mount Blue Sky in Colorado, a mountain goat is on the right.'
                            className={styles.exampleImage}
                            id={styles.darkAllow}
                        />
                        <div className={styles.exampleText}>
                            <p>Outside of invention, I love to travel, hike, and explore new places. AKA get off my computer and touch grass ⛰️</p>
                        </div>

                        <Image
                            src={enesFriends}
                            alt='A photo of Enes Grahovac at the peak of Mount Blue Sky in Colorado, a mountain goat is on the right.'
                            className={styles.exampleImage}
                            id={styles.lightAllow}
                        />
                        <Image
                            src={enesFriends}
                            alt='A photo of Enes Grahovac at the peak of Mount Blue Sky in Colorado, a mountain goat is on the right.'
                            className={styles.exampleImage}
                            id={styles.darkAllow}
                        />
                        <div className={styles.exampleText}><p>I ❤️ to spend time with family and friends.</p></div>
                        
                    </div>

                    {/* <div className={styles.exampleSection}>
                        <Image
                            src={books}
                            alt="Example of smart redirection"
                            className={styles.exampleImage}
                            id={styles.lightBlock}
                        />

                        <div className={styles.exampleText}>
                            <p>
                                Customize your learning experience. Review quizzes, pause them, and continue later. Create as many unique quizzes as you need to test your knowledge and retention.
                            </p>
                        </div>
                    </div>

                    <div className={styles.exampleSection}>
                        <Image
                            src={warAndPeace}
                            alt="Three example questions generated by BookQuest for the novel War and Peace. Showcasing the high-quality questions related to the theme of the book, a specific character question, and a historical relevant event which is central to 'War and Peace'."
                            className={styles.exampleImage}
                            id={styles.lightAllow}
                        />

                        <div className={styles.exampleText}>
                            <p>
                                Experience the quality of BookQuest quizzes, designed to craft questions specifically tailored to your chosen reading material. Perfect for any genre or book.
                            </p>
                        </div>
                    </div> */}


                    <Divider />

                    <div className={styles.footer}>
                        <h1>Are You Ready to Work Together?</h1>
                        <div className={styles.buttons}>
                            <Button
                                variant="primary"
                                label="🤝 Hire Me"
                                onClick={() => {
                                    window.location.href =
                                        "/contact";
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default LandingPageContent;
