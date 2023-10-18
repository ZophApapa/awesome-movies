import Link from "next/link";
import classes from "./button-link.module.css";
import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";
interface ButtonLinkProps {
  children: ReactNode;
  href: Url;
}
export const ButtonLink = ({ href, children }: ButtonLinkProps) => {
  return (
    <Link href={href} className={classes["button-link"]}>
      {children}
    </Link>
  );
};
