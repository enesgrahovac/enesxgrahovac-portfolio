'use client'
import { useEffect, createRef, ReactElement, useState } from "react";
import styles from "./PageLayout.module.css";
import Header from "@/components/patterns/Header/Header";
import Button from "@/components/patterns/Button/Button";
import { Plus } from "lucide-react";
import ModalOpener, {
    ModalRegistry,
} from "@/components/patterns/Modal/ModalOpener/ModalOpener";
// import EmptyState from "@/components/patterns/EmptyState/EmptyState";
import { useRouter, usePathname } from 'next/navigation'
import { useAppContext } from "@/contexts/AppContext";
const PageLayout = ({
    children,
    title = "BookQuest",
    showStaticHeader = false,
    footer,
    secondaryContent,
    onScrollToTop,
    isInitialLoad,
}: {
    children: any;
    title?: string;
    showHeader?: boolean;
    showStaticHeader?: boolean;
    footer?: ReactElement;
    secondaryContent?: ReactElement;
    onScrollToTop?: () => void;
    isInitialLoad?: boolean;
}) => {
    const router = useRouter();
    const pathname = usePathname();
    var mainContentRef = createRef<HTMLDivElement>();
    const [modalToUse, setModalToUse] = useState<any | null>(null);
    const [modalPropsToUse, setModalPropsToUse] = useState<any | null>(null);
    const { isMobileDevice } = useAppContext();

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                {showStaticHeader && (
                    <div className={styles.header}>
                        <div className={styles.headerInner}>
                            <Header
                                title="Enes Grahovac"
                                showMenu={isMobileDevice}
                                actions={
                                    <div className={styles.actionsContainer}>
                                        <div className={`${isMobileDevice ? styles.hide : styles.actions}`}>
                                            <Button
                                                variant="ghost"
                                                label="Resume"
                                                onClick={() => {
                                                    window.location.href =
                                                        "/resume";
                                                }}
                                            />
                                            <Button
                                                variant="ghost"
                                                label="Projects"
                                                onClick={() => {
                                                    window.location.href =
                                                        "/projects";
                                                }}
                                            />
                                            <Button
                                                variant="ghost"
                                                label="Principles"
                                                onClick={() => {
                                                    window.location.href =
                                                        "/principles";
                                                }}
                                            />

                                            {/* <Button
                                                variant="ghost"
                                                label="Blog"
                                                onClick={() => {
                                                    window.location.href =
                                                        "/blog";
                                                }}
                                            /> */}
                                        </div>

                                        <Button
                                            variant="primary"
                                            label="🤝 Hire Me"
                                            onClick={() => {
                                                window.location.href =
                                                    "/contact";
                                            }}
                                        />
                                    </div>
                                }
                            />
                        </div>
                    </div>
                )}
                <div ref={mainContentRef} className={styles.mainWrapper}>
                    <div className={styles.mainContent}>{children}</div>
                </div>
                {footer && (
                    <div className={styles.footer}>
                        <div className={styles.footerInner}>{footer}</div>
                    </div>
                )}
            </div>
            {secondaryContent && (
                <div className={styles.secondaryColumn}>{secondaryContent}</div>
            )}
        </div>
    );
};

export default PageLayout;
