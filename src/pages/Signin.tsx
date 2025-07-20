// src/pages/Signin.tsx
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const Signin = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        if (password !== confirmPassword) {
          alert("Passwords do not match");
          return;
        }
        await createUserWithEmailAndPassword(auth, email, password);
      }

      window.location.href = "/"; // Redirect after login/signup
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      window.location.href = "/";
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12 flex justify-center items-start">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-2xl font-bold text-center">
          {isLogin ? "Log in to your account" : "Create your account"}
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full border px-4 py-2 rounded-md"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full border px-4 py-2 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border px-4 py-2 rounded-md"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full border px-4 py-2 rounded-md"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-600">
          Or sign {isLogin ? "in" : "up"} with:
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-gray-100 py-2 rounded-md hover:bg-gray-200 transition"
          >
            Continue with Google
          </button>

          <button
            className="w-full bg-gray-100 py-2 rounded-md hover:bg-gray-200 transition"
            disabled
          >
            Continue with Facebook (coming soon)
          </button>
        </div>

        <div className="text-center text-sm text-gray-600">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button className="text-blue-600" onClick={() => setIsLogin(false)}>
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button className="text-blue-600" onClick={() => setIsLogin(true)}>
                Log in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
