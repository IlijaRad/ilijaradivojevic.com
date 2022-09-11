import Link from "next/link";
import { useRouter } from "next/router";

const NavigationLink = ({ url, text }) => {
  const { asPath } = useRouter();
  return (
    <li>
      <Link href={url}>
        <a
          className={
            "relative block px-3 py-2 transition dark:hover:text-primary-400 " +
            (asPath === url ? "text-primary-500" : "hover:text-primary-500")
          }
        >
          {text}
        </a>
      </Link>
    </li>
  );
};

export default NavigationLink;
