import ThemeToggler from "./ThemeToggler";
import MenuButton from "./MenuButton";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header
      className="pointer-events-none relative z-50 flex flex-col"
      style={{
        height: "var(--header-height)",
        marginBottom: "var(--header-mb)",
      }}
    >
      <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"></div>
      <div
        className="top-0 order-last -mb-3 pt-3 sm:px-8"
        style={{ position: "var(--header-position)" }}
      >
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div
                className="top-[var(--avatar-top,theme(spacing.3))] w-full"
                style={{ position: "var(--header-inner-position)" }}
              >
                <div className="relative">
                  <div className="absolute left-0 top-3 h-10 w-10 origin-left rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition-opacity dark:bg-zinc-800/90 dark:ring-white/10">
                    <a
                      href=""
                      className="pointer-events-none block h-16 w-16 origin-left"
                      style={{
                        transform: "var(--avatar-image-transform)",
                      }}
                    >
                      <img
                        src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=256&q=100"
                        alt="A"
                        className="h-16 w-16 rounded-full bg-zinc-100 object-cover text-transparent dark:bg-zinc-800"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="top-0 z-10 h-16 pt-6"
        style={{ position: "var(--header-position)" }}
      >
        <div
          className="top-[var(--header-top,theme(spacing.6))] w-full sm:px-8"
          style={{ position: "var(--header-inner-position)" }}
        >
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="relative flex gap-4">
                  <div className="flex flex-1"></div>
                  <div className="flex flex-1 justify-end md:justify-center">
                    <MenuButton />
                    <Navigation />
                  </div>
                  <div className="flex justify-end md:flex-1">
                    <ThemeToggler />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
