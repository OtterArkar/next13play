import NavLink from "./NavLink";
import Link from "next/link";
export default function Header() {
  return (
    <header className="px-[20%] w-full h-[4em] flex items-center justify-between border-gray-700  border-b">
      <Link href="/" className="font-bold relative">
        NextJS
        <span className="text-blue-500 absolute top-[-50%] right-[-30%] block">
          13
        </span>
      </Link>
      <ul className="flex items-center gap-8">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/posts"}>Posts</NavLink>
        </li>
      </ul>
    </header>
  );
}
