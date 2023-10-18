import Link from "next/link";
import classes from "./header.module.css";
import Image from "next/image";
import { ButtonLink } from "../buttons/button-link";
export const Header = () => {
  return (
    <nav className={classes.header}>
      <Image src="/logo.png" alt="me" width="174" height="45" />
      <ul className={classes.header__links}>
        <li>
          <ButtonLink href="/">Discover</ButtonLink>
        </li>
        <li>
          <ButtonLink href="/search">Search</ButtonLink>
        </li>
      </ul>
    </nav>
  );
};
