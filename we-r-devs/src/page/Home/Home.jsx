import React from "react";
import styles from "./Home.module.scss";
import { Title } from "../../components/Title/Title";
import Calendar from "../../containers/calendar";

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Title />
      <Calendar />
    </div>
  );
};
