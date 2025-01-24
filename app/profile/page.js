import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Page() {
  const { isAuthenticated } = await getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) {
    redirect("/api/auth/login");  
  }

  return (
    <div className="container mx-auto text-center min-h-[calc(100vh-75px)] flex items-center justify-center flex-col">
      <h2 className="text-4xl font-bold mt-8 m-2 text-center">Welcome to my profile</h2>
    </div>
  );
}
