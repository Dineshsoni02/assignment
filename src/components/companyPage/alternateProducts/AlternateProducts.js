import React from "react";
import styles from "./AlternateProducts.module.scss";
import smWatch from "../../../assets/smallwatch.png";
import { Smartphone } from "react-feather";

const AlternateProducts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>AlternateProducts</div>
      <div className={styles.product}>
        <img src={smWatch} alt="demowatch" className={styles.demoImg} />
        <div className={styles.details}>
          <div className={styles.info}>
            Realme 108 cm (43 inch) Ultra HD (4k) LED Smart Android TV with
            Handsfree Voice Search and Dolby Vision & Atmos (RMV2004)
          </div>
          <div className={styles.bottomdiv}>
            <div className={styles.price}>
              <Smartphone />
              <div className={styles.rupeeValue}>Rs. 39,990</div>
              <span>Rs. 34,500 </span>
            </div>
            <div className={styles.orderBtn}>
                <input type="button" value="Order now" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlternateProducts;
