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
import {useRouter, usePathname} from 'next/navigation'
const PageLayout = ({
    children,
    title = "BookQuest",
    showStaticHeader = false,
    showMenu = true,
    footer,
    secondaryContent,
    onScrollToTop,
    isInitialLoad,
}: {
    children: any;
    title?: string;
    showHeader?: boolean;
    showStaticHeader?: boolean;
    showMenu?: boolean;
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



    return (
        <div className={styles.container}>
            <div className={styles.main}>
                {showStaticHeader && (
                    <div className={styles.header}>
                        <div className={styles.headerInner}>
                            <Header
                                showMenu={showMenu}
                                title="Enes Grahovac"
                                actions={
                                    <ModalOpener
                                        modal={ modalToUse }
                                        modalProps={ modalPropsToUse }
                                    >
                                        {(options) => (
                                            <Button
                                                variant="primary"
                                                // icon={<Plus />}
                                                label="🤝 Get in touch"
                                                onClick={() => options.toggleModal(true)}
                                            />
                                        )}
                                    </ModalOpener>
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
