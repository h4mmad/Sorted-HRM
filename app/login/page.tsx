"use client";
import GoogleLogo from "../../public/googleICON.png";
import GithubLogo from "../../public/github-mark.png";
import LoginButton from "../components/LoginButton";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-myDarkBlue h-fit w-full flex justify-center items-center">
        <h1 className="text-white text-xl p-2 font-medium">Sorted HRM</h1>
      </div>

      <div className="flex bg-white flex-col justify-center items-center h-screen w-1/3">
        <h2 className=" text-3xl text-myDarkBlue mb-4 font-bold">
          Login to your account
        </h2>
        <div className="border border-myDarkBlue rounded-md p-8 flex flex-col items-center">
          <LoginButton
            text="Continue with Google"
            logo={GoogleLogo.src}
            provider="google"
            callbackUrl="/dashboard"
          />

          <LoginButton
            text="Continue with Github"
            logo={GithubLogo.src}
            provider="github"
            callbackUrl="/dashboard"
          />
        </div>
      </div>
    </div>
  );
}
