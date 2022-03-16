import React from "react";
import styles from "./Main.module.scss";
import demo1 from "../../assets/demo1.png";
import watch from "../../assets/watchdemo.png";
import greenDot from "../../assets/greenDot.png";
import { Smartphone } from "react-feather";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topDiv}>
        <div className={styles.head}>
          <img src={demo1} alt="demo" />
          <h1>All Bids From Merchants</h1>
        </div>
        <span>Some subheading for the offers of merchants</span>
      </div>
      <div className={styles.bottomDiv}>
        <div className={styles.innerDiv}>
          <img src={watch} alt="watch" className={styles.watchImg} />
          <div className={styles.details}>
            <div className={styles.info}>
              Realme 108 cm (43 inch) Ultra HD (4k) LED Smart Android TV with
              Handsfree Voice Search and Dolby Vision & Atmos (RMV2004)
            </div>
            <div className={styles.price}>
              <Smartphone />
              <div className={styles.rupeeValue}>Rs. 39,990</div>
            </div>
            <div className={styles.qty}>Qty:2</div>
            <div className={styles.allDetails}>
              <a href="/">All Details</a>
            </div>
          </div>
          <div className={styles.status}>
            <div className={styles.sthead}>
              <div className={styles.title}>Status</div>
              <img src={greenDot} alt="" className={styles.greenDot} />
            </div>
            <div className={styles.timeRem}>
              Time Remaining
              <span>26 minutes</span>
            </div>
            <div className={styles.bidplaced}>
              <div className={styles.text}>Bids placed</div>
              <span>03</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Main;
