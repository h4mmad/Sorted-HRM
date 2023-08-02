"use client";
import GoogleLogo from "../../public/googleICON.png";
import GithubLogo from "../../public/github-mark.png";
import LoginButton from "../components/LoginButton";

export default function LoginPage() {
  return (
    <div className="flex flex-row items-center">
      <div className="bg-myDarkBlue h-screen w-2/3 flex justify-center items-center">
        <h1 className="text-white text-4xl"></h1>
      </div>

      <div className="flex bg-white flex-col justify-center items-center h-screen w-1/3">
        <h2 className=" text-2xl text-myDarkBlue mb-4 font-bold">
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
