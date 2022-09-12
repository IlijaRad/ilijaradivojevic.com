import Project from "@/components/Project";
import { projects } from "@/static/projects";

const Projects = () => {
  return (
    <>
      <div className="mt-16 sm:mt-32 sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <header className="max-w-2xl">
                <h1 className="h1">Things I&apos;ve made in my spare time.</h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  I&apos;ve worked on tons of little projects over the years but
                  these are the ones that I&apos;m most proud of. Many of them
                  are open-source, so if you see something that piques your
                  interest, check out the code and contribute if you have ideas
                  for how it can be improved.
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
