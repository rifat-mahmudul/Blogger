import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Navbar() {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="bg-gray-200 w-full shadow-md text-black">
      <div className="max-w-[90%] xl:max-w-[1200px] mx-auto py-3 flex justify-between items-center ">
        <div className="text-3xl font-bold text-3x">
          <Link href="/">Blogger</Link>
        </div>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/profile">
              Profile
            </Link>
          </li>
        </ul>
        <div>
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-white">Welcome, {user.given_name || user.email}</span>
              <LogoutLink>
                <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition">
                  Logout
                </button>
              </LogoutLink>
            </div>
          ) : (
            <LoginLink>
              <button className="bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition">
                Login
              </button>
            </LoginLink>
          )}
        </div>
      </div>
    </nav>
  );
}
