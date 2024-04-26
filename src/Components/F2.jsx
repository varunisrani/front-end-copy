import { useContext } from "react";
import Authapi from "../Authapi";

export default function F2() {
  const authApi = useContext(Authapi);
  const handleGoogleLogin = async () => {
    try {
      // Redirect the user to the Google OAuth consent screen
      window.location.href = "http://localhost:3001/auth/google";
      authApi.setAuth(true);
    } catch (error) {
      console.error("Error logging in with Google:", error);
    }
  };

  return (
    <>
      <div className="flex flex-row ml-1 mt-10 mad:mt-7">
        <button
          onClick={handleGoogleLogin}
          className="px-10 py-3 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 mt-5"
        >
          <img
            className="w-4 h-4"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          <span className="text-xs text-nb4">Google Account</span>
        </button>
      </div>
    </>
  );
}
