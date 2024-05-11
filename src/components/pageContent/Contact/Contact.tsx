import React, { useEffect } from "react";
import PageLayout from "@/components/PageLayout/PageLayout";
import styles from "./Contact.module.css";
import enesHeadshot from "@/public/img/headshot_presentation.png";
// import books from "@/public/img/books_tall_1.png";
// import warAndPeace from "@/public/img/war_and_peace.png";
import Image from "next/image";
import Divider from "@/components/patterns/Divider/Divider";
import Button from "@/components/patterns/Button/Button";
import { Check, Plus, Send } from "lucide-react";
import Link from "next/link";

const ContactContent = ({ }: {}) => {
    const [showCopiedMessage, setShowCopiedMessage] = React.useState(false);
    const [showMenuBar, setShowMenuBar] = React.useState(false);

    return (
        <PageLayout showStaticHeader={true} showMenu={showMenuBar}>
            <div className={styles.wrapper}>
                <div className={styles.main}>
                    https://twitter.com/EnesGrahovac
                </div>
            </div>
        </PageLayout>
    );
};

export default ContactContent;
