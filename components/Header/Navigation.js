import { navigationLinks } from "../../static/navigationLinks";
import NavigationLink from "./NavigationLink";

const Navigation = () => {
  return (
    <nav className="pointer-events-auto hidden md:block">
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {navigationLinks.map(({ id, url, text }) => (
          <NavigationLink key={id} url={url} text={text} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
