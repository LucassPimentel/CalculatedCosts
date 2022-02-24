import React from "react";
import styles from "./Home.module.css";
import investidor from "../../img/investidor.jpg";
import LinkButton from "../layout/LinkButton";

const Home = () => {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Calculated Costs</span>
      </h1>
      <p>Gerencie seus projetos conosco!</p>
      <LinkButton to="/NewProject" text="Criar Projeto" />
      <img
        className={styles.img_background}
        src={investidor}
        alt="investidor"
      />
    </section>
  );
};

export default Home;
