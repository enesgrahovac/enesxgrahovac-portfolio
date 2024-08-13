import styles from "./Contact.module.css";
import Divider from "@/components/patterns/Divider/Divider";
import Button from "@/components/patterns/Button/Button";
import { Calendar, Twitter, LucideLinkedin } from "lucide-react";

const ContactContent = ({ }: {}) => {

    return (
        <div className={styles.main}>
            <div className={styles.intro}>
                <h1>Let's chat 🤝</h1>
                <h2>
                    I'm open to meeting to discuss new opportunities.
                </h2>
            </div>
            <div className={styles.meetButton}  >
                <Button
                    variant="secondary"
                    label="Let's meet!"
                    icon={<Calendar />}
                    onClick={() => {
                        window.open("https://calendar.app.google/FWkZ7TTygMtLs2PeA", "_blank");
                    }}
                />
            </div>
            <Divider />
            <div className={styles.intro}>
                <h1>Other ways to reach me 📥</h1>
                <h2>
                    Feel free to DM me through these platforms.
                </h2>
            </div>
            <Button
                variant="ghost"
                label="LinkedIn"
                icon={<LucideLinkedin />}
                onClick={() => {
                    window.open("https://www.linkedin.com/in/enes-grahovac-105/", "_blank");
                }}
            />
            <Button
                variant="ghost"
                label="Twitter (X)"
                icon={<Twitter />}
                onClick={() => {
                    window.open("https://twitter.com/enesgrahovac", "_blank");
                }}
            />
            
        </div>
    );
};

export default ContactContent;
