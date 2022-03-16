import React from "react";
import AlternateProducts from "./alternateProducts/AlternateProducts";
import styles from "./Company.module.scss";
import demoImg from "../../assets/demo2.png";
import { Archive, CheckCircle, ShoppingBag, Truck } from "react-feather";

const CompanyPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topDiv}>
        <div className={styles.title}>
          Watchmart Street-4 Shop
          <span>Rs. 35,000</span>
        </div>
        <div className={styles.compLogo}>
          <img src={demoImg} alt="demoimg" />
          <div className={styles.name}>
            Merchant studio innovations pvt. ltd.
          </div>
        </div>
      </div>
      <div className={styles.deliveryDetails}>
        <div className={styles.title}>Delivery & services</div>
        <div className={styles.innerContainer}>
          <div className={styles.expdel}>
            <Truck />
            <div className={styles.info}>
            Express delivery <span>(delivery in 1 hour)</span>
            </div>
            <CheckCircle />
          </div>
          <div className={styles.rtn}>
            <Archive />
            Return Option
            <CheckCircle />
          </div>
        </div>
      </div>
      <div className={styles.extraOffer}>
        <ShoppingBag /> Extra Offer
      </div>
      <div className={styles.footerText}>
        Bajaj Platini PX97 Torque 36-litre Personal Air cooler (white) - for
        medium room
      </div>
      <div className={styles.btnBox}>

      <input type="button" value="Buy Now" className={styles.buyBtn} />
      </div>
      <AlternateProducts />
    </div>
  );
};

export default CompanyPage;
