import { usesData } from "@/static/usesData";
import UsesSection from "@/components/UsesSection";
import { getSocialMetas } from "@/utils/getSocialMetas";

const Uses = () => {
  return (
    <>
      {getSocialMetas(
        "https://ilijaradivojevic.com/uses",
        "What Ilija uses",
        "The tools Ilija Radivojevic uses",
        "",
        "Uses, Ilija Radivojevic, Tools, Tech, Editor, Browser Extensions, Programming Languages"
      )}
      <div className="mt-16 sm:mt-32 sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <header className="max-w-2xl">
                <h1 className="h1">
                  Software I use, and other things I recommend.
                </h1>
                <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                  Inquiries concerning the tools and techniques I employ to
                  facilitate software development and enhance productivity are
                  frequently directed towards me. Accordingly, I have compiled a
                  comprehensive catalogue of my preferred resources for your
                  perusal.
                </p>
              </header>
              <div className="mt-16 sm:mt-20">
                <div className="space-y-20">
                  {usesData.map(({ id, heading, items }) => (
                    <UsesSection
                      key={id}
                      id={id}
                      heading={heading}
                      items={items}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Uses;
