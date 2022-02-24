import { useNavigate } from "react-router-dom";
import React from "react";
import ProjectForm from "../project/ProjectForm";
import styles from "./NewProject.module.css";

const NewProject = () => {
  const navigate = useNavigate();

  const createPost = (project) => {
    //inicializar custos e serviços zerado
    project.cost = 0;
    project.services = [];
    //  para iniciar o backend dê um run start backend no console
    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        // redirect
        navigate("/Projects", {state: { message: "Projeto criado com sucesso!" }});
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <h4>Crie seu projeto para depois adicionar os serviços</h4>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
    </div>
  );
};

export default NewProject;
