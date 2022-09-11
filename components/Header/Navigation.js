import { navigationLinks } from "../../static/navigationLinks";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import clsx from "clsx";
import Link from "next/link";

import CaretDownIcon from "../../public/icons/caret-down.svg";
import CloseIcon from "../../public/icons/close.svg";

const NavItem = ({ url, text }) => {
  const { asPath } = useRouter();
  const isActiveLink = asPath === url;
  return (
    <li>
      <Link href={url}>
        <a
          className={clsx(
            "relative block px-3 py-2 transition",
            isActiveLink
              ? "text-primary-500 dark:text-primary-400"
              : "hover:text-primary-500 dark:hover:text-primary-400"
          )}
        >
          {text}
          {isActiveLink ? (
            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/40 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"></span>
          ) : null}
        </a>
      </Link>
    </li>
  );
};

const MobileNavItem = ({ href, children }) => {
  return (
    <li>
      <Popover.Button as={Link} href={href}>
        <a className="block py-2">{children}</a>
      </Popover.Button>
    </li>
  );
};

export const DesktopNavigation = () => {
  return (
    <nav className="pointer-events-auto hidden md:block">
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {navigationLinks.map(({ id, url, text }) => (
          <NavItem key={id} url={url} text={text} />
        ))}
      </ul>
    </nav>
  );
};

export const MobileNavigation = (props) => {
  return (
    <div className="pointer-events-auto md:hidden">
      <Popover {...props}>
        <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
          Menu
          <CaretDownIcon />
        </Popover.Button>
        <Transition.Root>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
            >
              <div className="flex flex-row-reverse items-center justify-between">
                <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                  <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                </Popover.Button>
                <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  Navigation
                </h2>
              </div>
              <nav className="mt-6">
                <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                  <MobileNavItem href="/aboutz">About</MobileNavItem>
                  <MobileNavItem href="/articlesz">Articles</MobileNavItem>
                  <MobileNavItem href="/projectsz">Projects</MobileNavItem>
                  <MobileNavItem href="/speakingz">Speaking</MobileNavItem>
                  <MobileNavItem href="/usesz">Uses</MobileNavItem>
                </ul>
              </nav>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    </div>
  );
};
