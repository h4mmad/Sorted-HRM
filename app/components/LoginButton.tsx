import { signIn } from "next-auth/react";

type LoginButtonProps = {
  text: string;
  logo: string;
  provider: string;
  callbackUrl: string;
};

const LoginButton = ({
  text,
  logo,
  provider,
  callbackUrl,
}: LoginButtonProps) => {
  return (
    <button
      className="p-2 mt-4 rounded-md border border-myDarkBlue w-full flex flex-row justify-center items-center space-x-2 text-myDarkBlue hover:bg-gray-100"
      onClick={() => signIn(provider, { callbackUrl: callbackUrl })}
    >
      <img src={logo} className="w-6" />

      <h2>{text}</h2>
    </button>
  );
};

export default LoginButton;
