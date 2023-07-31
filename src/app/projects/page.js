import Project from "@/Components/Project";
import { projectDetails } from "@/data/Details";
import React from "react";
//import Project from "../Components/Project";
//import { projectDetails } from "../Details";

function Projects() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {React.Children.toArray(
            projectDetails.map(
              ({ id, title, image, description, techstack }) => (
                <Project
                  id={id}
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
