"use client";
import GoogleLogo from "../../public/googleICON.png";
import GithubLogo from "../../public/github-mark.png";
import LoginButton from "../components/LoginButton";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-myDarkBlue w-full flex flex-row justify-center p-4">
        <h1 className="text-white  font-bold text-xl">Sorted HRM</h1>
      </div>

      <div className="border border-myDarkBlue rounded-md p-8 mt-32 flex flex-col items-center">
        <h2 className=" text-2xl text-myDarkBlue mb-4 font-bold">
          Login to your account
        </h2>

        <LoginButton
          text="Continue with Google"
          logo={GoogleLogo.src}
          provider="google"
          callbackUrl="/application/dashboard"
        />

        <LoginButton
          text="Continue with Github"
          logo={GithubLogo.src}
          provider="github"
          callbackUrl="/application/dashboard"
        />
      </div>
    </div>
  );
}
