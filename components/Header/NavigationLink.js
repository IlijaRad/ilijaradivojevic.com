import Link from "next/link";

const NavigationLink = ({ url, text }) => {
  return (
    <li>
      <Link href={url}>
        <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">
          {text}
        </a>
      </Link>
    </li>
  );
};

export default NavigationLink;
