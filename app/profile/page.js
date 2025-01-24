import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Page() {
  const { isAuthenticated } = await getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) {
    redirect("/api/auth/login");  
  }

  return (
    <div className="container mx-auto text-center md:text-left">
      <h2 className="text-4xl font-bold mt-8 m-2 text-center">Welcome to my profile</h2>
    </div>
  );
}
