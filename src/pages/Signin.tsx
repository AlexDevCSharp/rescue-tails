// src/pages/Signin.tsx
import { useState } from "react";

const Signin = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12 flex justify-center items-start">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-2xl font-bold text-center">
          {isLogin ? "Log in to your account" : "Create your account"}
        </h1>

        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" placeholder="Enter your name" className="w-full border px-4 py-2 rounded-md" />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" placeholder="you@email.com" className="w-full border px-4 py-2 rounded-md" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" placeholder="Enter your password" className="w-full border px-4 py-2 rounded-md" />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <input type="password" placeholder="Confirm your password" className="w-full border px-4 py-2 rounded-md" />
            </div>
          )}

          <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition">
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-600">
          Or sign {isLogin ? "in" : "up"} with:
        </div>

        <div className="flex flex-col gap-2">
          <button className="w-full bg-gray-100 py-2 rounded-md hover:bg-gray-200 transition">
            Continue with Gmail
          </button>
          <button className="w-full bg-gray-100 py-2 rounded-md hover:bg-gray-200 transition">
            Continue with Facebook
          </button>
        </div>

        <div className="text-center text-sm text-gray-600">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button className="text-blue-600" onClick={() => setIsLogin(false)}>Sign up</button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button className="text-blue-600" onClick={() => setIsLogin(true)}>Log in</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
