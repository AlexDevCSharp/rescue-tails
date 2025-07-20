import { useState } from "react";
import { auth, googleProvider } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Signed in!");
      }
    } catch (err) {
      console.error("Auth error:", err);
      alert("Authentication failed");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Signed in with Google!");
    } catch (err) {
      console.error("Google sign-in error:", err);
      alert("Google Sign-In failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow space-y-6">
      <h1 className="text-2xl font-bold text-center">
        {isRegister ? "Create an Account" : "Login to Your Account"}
      </h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border px-4 py-2 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded"
        >
          {isRegister ? "Sign Up" : "Sign In"}
        </button>
      </form>

      <button
        onClick={handleGoogleSignIn}
        className="w-full bg-red-500 text-white py-2 rounded"
      >
        Sign In with Google
      </button>

      <p className="text-center text-sm">
        {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
        <button
          onClick={() => setIsRegister(!isRegister)}
          className="text-orange-500 font-semibold underline"
        >
          {isRegister ? "Sign in" : "Register"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
