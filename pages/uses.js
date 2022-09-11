import { usesData } from "../static/usesData";
import UsesSection from "../components/UsesSection";

const Uses = () => {
  return (
    <div className="mt-16 sm:mt-32 sm:px-8">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <header className="max-w-2xl">
              <h1 className="h1">
                Software I use, gadgets I love, and other things I recommend.
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                I get asked a lot about the things I use to build software, stay
                productive, or buy to fool myself into thinking I&apos;m being
                productive when I&apos;m really just procrastinating.
                Here&apos;s a big list of all of my favorite stuff.
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
  );
};

export default Uses;
