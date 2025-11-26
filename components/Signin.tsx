import { SignInButton } from "@clerk/nextjs";

const Signin = () => {
  return (
    <SignInButton mode="modal">
      <button className="text-sm font-semibold hover:darkColor text-lightColor hover:cursor-pointer hoverEffect">
        Login
      </button>
    </SignInButton>
  );
};

export default Signin;
