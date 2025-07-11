export const Auth = ({ children }) => {
  // This component serves as a layout for authentication pages like Sign In and Sign Up.
  // It centers the content vertically and horizontally, providing a consistent background and text style.
  return (
    <div className="h-[100vh] flex items-center justify-center bg-slack text-ellipsis text-white">
      <div className="md:h-auto md:w-[520px]">{children}</div>
    </div>
  );
};
