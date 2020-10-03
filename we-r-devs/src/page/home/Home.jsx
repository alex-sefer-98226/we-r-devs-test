import React from "react";
import styles from "./home.module.scss";
import { Title } from "../../components/title/Title";
import Modal from "../../components/containers/modal";
import Calendar from "../../components/containers/calendar";

export const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Title />
      <Calendar />
      <Modal />
    </div>
  );
};
