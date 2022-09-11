import Link from "next/link";

const NavigationLink = ({ url, text }) => {
  return (
    <li>
      <Link href={url}>
        <a className="hover:text-primary-500 dark:hover:text-primary-400 relative block px-3 py-2 transition">
          {text}
        </a>
      </Link>
    </li>
  );
};

export default NavigationLink;
