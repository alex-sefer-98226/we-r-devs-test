import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink exact to={"/"}>
        <img src={logo} alt={"logo"} className={styles.logo} />
      </NavLink>
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          <li className={styles.navigationLink}>
            <NavLink
              className={styles.navigationLinkItem}
              activeClassName={styles.navigationLinkItemActive}
              exact
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.navigationLink}>
            <NavLink
              className={styles.navigationLinkItem}
              activeClassName={styles.navigationLinkItemActive}
              exact
              to={"/about"}
            >
              About us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
