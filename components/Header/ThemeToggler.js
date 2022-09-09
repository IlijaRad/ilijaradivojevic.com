import { useTheme } from "next-themes";
import SunIcon from "../../public/icons/sun.svg";
import MoonIcon from "../../public/icons/moon.svg";

const ThemeToggler = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const darkMode = currentTheme === "dark";

  const toggleTheme = () => {
    if (darkMode) setTheme("light");
    else setTheme("dark");
  };

  return (
    <div className="pointer-events-auto">
      <button
        type="button"
        aria-label="Toggle dark mode"
        className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
        onClick={() => toggleTheme()}
      >
        <SunIcon />
        <MoonIcon />
      </button>
    </div>
  );
};

export default ThemeToggler;
