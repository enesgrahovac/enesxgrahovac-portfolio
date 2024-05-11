import React, { ReactElement } from "react";
import styles from "./Header.module.css";
import classNames from "classnames";
import Link from 'next/link'; // Import Link from next/link

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string | ReactElement;
    actions?: ReactElement;
}

const Header = ({
    title,
    subtitle,
    actions,
    className,
    ...rest
}: HeaderProps) => {
    return (
        <div className={classNames(className, styles.container)} {...rest}>
            <div
                className={classNames(
                    styles.mainHeader,
                )}
            >
                <div className={styles.titleAndMenu}>
                    <Link href="/" passHref>
                        <h1>{title}</h1>
                    </Link>
                    {/* <h1>{title}</h1> */}
                </div>
                {actions && <div className={styles.actionGroup}>{actions}</div>}
            </div>
            {subtitle && <p>{subtitle}</p>}
        </div>
    );
};

export default Header;
