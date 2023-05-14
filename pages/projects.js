import Project from "@/components/Project";
import { projects } from "@/static/projects";
import { getSocialMetas } from "@/utils/getSocialMetas";

const Projects = () => {
  return (
    <>
      {getSocialMetas(
        "https://ilijaradivojevic.com/projects",
        "Projects by Ilija Radivojevic",
        "The projects Ilija Radivojevic has worked on",
        "",
        "Projects, Ilija Radivojevic, Contributions, Websites, Links, Portfolio"
      )}
      <div className="mt-16 sm:mt-32 sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <header className="max-w-2xl">
                <h1 className="h1">The projects I have worked on.</h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  Over the course of my professional journey, I have had the
                  privilege of contributing to a multitude of diverse projects.
                  Each one, in its own way, has provided invaluable experiences
                  and opportunities for growth. However, among these myriad
                  undertakings, there are a select few that hold a special place
                  in my heart. Here are the projects that I&apos;m talking
                  about.
                </p>
              </header>
              <div className="mt-16 sm:mt-20">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {projects.map(
                    ({
                      id,
                      imgSrc,
                      linkURL,
                      linkText,
                      projDescription,
                      projName,
                    }) => (
                      <Project
                        key={id}
                        imgSrc={imgSrc}
                        linkURL={linkURL}
                        linkText={linkText}
                        projDescription={projDescription}
                        projName={projName}
                      />
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
