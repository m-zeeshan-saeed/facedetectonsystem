/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useState, useEffect } from "react";
import { auth } from "../Components/utils/init-firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";
import Link from "next/link";
import Loader from "../Components/Loader";

const Provider = new GoogleAuthProvider();

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { authUser, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && authUser) {
      router.push("/admin/dashboard");
    }
  }, [authUser, isLoading]);

  const loginHandler = async () => {
    if (!email || !password) return;
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      setError(true);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const user = await signInWithPopup(auth, Provider);
      console.log(user);
    } catch (error) {
      console.error("An error occured", error);
    }
  };

  return isLoading || (!isLoading && !!authUser) ? (
    <Loader />
  ) : (
    <>
      <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <section className="flex w-[30rem] flex-col space-y-10">
          <div className="text-center text-4xl font-medium">Log In</div>
          <form onSubmit={(e) => e.preventDefault()} className="">
            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 pb-[10px]">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email or Username"
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
            </div>

            <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 pb-[10px] mt-[20px]">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              />
            </div>

            <button
              className="w-full  transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400 pb-[10px] mt-[20px] "
              onClick={loginHandler}
            >
              LOG IN
            </button>
            {error && (
              <span className=" text-red-900 mt-3 text-xs">
                Wrong email or password!
              </span>
            )}
          </form>

          <div className="bg-black text-white w-full py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90 flex justify-center items-center gap-4 cursor-pointer group">
            <FcGoogle size={22} />
            <span
              className="font-medium  text-white group-hover:text-white"
              onClick={signInWithGoogle}
            >
              Login with Google
            </span>
          </div>

          <a
            href="#"
            className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
          >
            FORGOT PASSWORD?
          </a>

          <p className="text-center text-lg">
            No account?
            <Link
              href="/signup"
              className="font-medium text-indigo-500 underline-offset-4 hover:underline"
            >
              Create account
            </Link>
          </p>
        </section>
      </main>
    </>
  );
};

export default Login;
