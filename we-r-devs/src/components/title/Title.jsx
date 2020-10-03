import React from "react";
import styles from "./title.module.scss";

export const Title = () => {
  return (
    <div className={styles.titleWrapper}>
      <h1 className={styles.heading}>Choose the day for the meeting</h1>
      <p className={styles.description}>
        We encourage you to book your appointment online.
        <br /> This will save you time.
      </p>
    </div>
  );
};
