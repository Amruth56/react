"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const Pathname = usePathname();
  console.log("Pathname", Pathname);
  return (
    <html lang="en">
      <body>
        <div>
          <ul>
            <li>Login Navbar</li>
            <li>
              <Link href="/login">Login Main</Link>
            </li>
            <li>
              <Link href="/about/aboutcollege">About College</Link>
            </li>
            <li>
              <Link href="/about/aboutstudent">About Student</Link>
            </li>
          </ul>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
