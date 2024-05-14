import React, { ReactElement } from "react";
import styles from "./Header.module.css";
import classNames from "classnames";
import Button from "../Button/Button";
import { Menu } from "lucide-react";
import HamburgerMenu from "@/components/HamburgerMenu/HamburgerMenu";
import Link from "next/link";
interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string | ReactElement;
    actions?: ReactElement;
    showMenu?: boolean;
}

const Header = ({
    title,
    subtitle,
    actions,
    className,
    showMenu = false,
    ...rest
}: HeaderProps) => {
    return (
        <div className={classNames(className, styles.container)} {...rest}>
            <div
                className={classNames(
                    styles.mainHeader,
                    showMenu ? styles.offsetHeader : null
                )}
            >
                <div className={styles.titleAndMenu}>
                    {showMenu && <HamburgerMenu />}
                    <Link href="/" passHref>
                        <h1>{title}</h1>
                    </Link>
                </div>
                {actions && <div className={styles.actionGroup}>{actions}</div>}
            </div>
            {subtitle && <p>{subtitle}</p>}
        </div>
    );
};

export default Header;
