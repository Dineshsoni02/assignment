import React from "react";
import { Menu, UserPlus } from "react-feather";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.menu}>
          <Menu />
        </div>
        <div className={styles.search}>
          <input type="text" placeholder="Enter here" />
          <input type="button" value="Search" />
        </div>
        <div className={styles.right}>
          <a href="#">Live bids</a>
          <a href="#">
            <UserPlus className={styles.userAddIcon} />
          </a>
          <a href="#">Help & support </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
