import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-2">
        <div className="max-w-md space text-center text-primary">
          <h1 className="text-xl text-white font-bold tracking-tighter">
            Welcome to Ribon stores
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
