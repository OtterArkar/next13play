import Link from "next/link";
import { ReactElement } from "react";

export type Props = {
  href: string;
  children: React.ReactNode;
};

const NavLink = (props: Props) => {
  return (
    <>
      <Link href={props.href} className=" hover:text-blue-500">
        {props.children}
      </Link>
    </>
  );
};
export default NavLink;
