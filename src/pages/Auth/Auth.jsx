import { SignupCard } from "@/components/organisms/Auth/SignupCard";

export const Auth = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center bg-[#5f3e5b] text-ellipsis text-white">
      <div className="md:h-auto md:w-[520px]">
        <SignupCard />
      </div>
    </div>
  );
};
