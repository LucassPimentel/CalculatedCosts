import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./NavBar.module.css";
import moedas from "../../img/moedas.png";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/Home">
          <img className={styles.logo} src={moedas} alt="logo" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/Home">início</Link>
          </li>
          <li className={styles.item}>
            <Link to="/AboutUs">Sobre Nós</Link>
          </li>

          <li className={styles.item}>
            <Link to="/Contact">Contatos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/Projects">Projetos</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default NavBar;
