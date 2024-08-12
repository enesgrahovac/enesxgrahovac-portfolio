import React from "react";
import styles from "./HamburgerMenu.module.css";
import Button from "../patterns/Button/Button";
import {
    Bookmark,
    Goal,
    Home,
    Lightbulb,
    Mail,
    Menu,
    PanelLeftClose,
    Settings,
    Info,
    Newspaper,
    Book,
} from "lucide-react";
import classNames from "classnames";
import Header from "../patterns/Header/Header";
import Link from "next/link";

const HamburgerMenu = () => {
    const [isMenuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <Button variant="ghost" icon={<Menu />} onClick={toggleMenu} />
            <div onClick={toggleMenu} className={classNames(styles.overlay, isMenuOpen ? styles.open : null)} >
                <div className={classNames(styles.menu, isMenuOpen ? styles.open : null)}>
                    <Header
                        title="Enes Grahovac"
                        actions={
                            <Button
                                variant="ghost"
                                icon={<PanelLeftClose onClick={toggleMenu} />}
                            />
                        }
                        className={styles.header}
                    />
                    <ul>
                        {/* <li>
              <Link href="/home">
                <Home /> Home
              </Link>
            </li> */}
                        <li>
                            <Link href="/resume">
                                <Settings /> Resume
                            </Link>
                        </li>
                        <li>
                            <a href="/principles" >
                                <Book /> Principles
                            </a>
                        </li>
                        {/* <li>
                            <a href="/blog" >
                                <Book /> Blog
                            </a>
                        </li> */}

                    </ul>
                    <div className={styles.divider} />
                    <ul>
                        <li className={styles.bTop}>
                            <a href="mailto:enes.resume@gmail.com" target="_blank">
                                <Mail />{" "}
                                <div>
                                    Contact<p>enes.resume@gmail.com</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/" >
                                <Info /> About Me
                            </a>
                        </li>
                        {/* <li>
              <a
                href="/blogs"
                
              >
                <Newspaper /> Blog
              </a>
            </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HamburgerMenu;
