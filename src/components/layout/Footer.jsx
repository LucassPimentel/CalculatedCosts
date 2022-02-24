import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href="">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/olucaaos/" target={"blank"}>
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lucas-pimentel-0b7492222/"
            target={"blank"}
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Calculated costs &copy; 2022</span>
      </p>
    </footer>
  );
};

export default Footer;
