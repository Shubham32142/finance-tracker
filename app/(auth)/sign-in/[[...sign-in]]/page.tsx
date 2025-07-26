import { Loader2 } from "lucide-react";
import Image from "next/image";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center">
        <div className="text-center space-y-4 pt-16"></div>
        <h1 className="font-bold text-3xl text-[#2E2A47]">Welcome back!</h1>
        <p className="text-base text-[#7E8CA0]">
          Log in or create account to get back to your dashboard
        </p>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground"></Loader2>
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <Image src="./logo.svg" height={100} width={100} alt="Logo"></Image>
      </div>
    </div>
  );
};

export default SignInPage;
