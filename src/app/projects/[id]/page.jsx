"use client";
import React from "react";
//import { useSearchParams } from "next/navigation";
//import { projectDetails } from "../Details";
//import "../styles/SingleProject.css";
import { projectDetails } from "@/data/Details";

const ProjectPage = ({ params }) => {
  //const router = useSearchParams();
  //console.log({ params });
  const project = projectDetails.find(
    (project) => project.id === parseInt(params.id)
  );
  //console.log(project.title);
  return (
    <section className="sectionn container px-6 pb-48 pt-11 dark:text-gray-100 -mt-8 cocktail-section">
      <h2 className="section-title text-3xl text-center">{project.title}</h2>

      <div className="drink flex flex-col md:flex-row pt-11 gap-4  justify-center">
        <img src={project.image} alt={project.title} />
        <div className="drink-info px-2">
          <p className="pb-2">
            <span className="drink-data text-lg ">Technologies :</span>{" "}
            {project.techstack}
          </p>
          <p>
            <span className="drink-data text-lg">Description :</span>{" "}
            {project.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
