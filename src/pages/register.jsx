/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-html-link-for-pages */

import Image from "next/image";
import { useToast } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useState, useEffect } from "react";
import { auth } from "../Components/utils/init-firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";

import Loader from "../Components/Loader";

const Provider = new GoogleAuthProvider();

const RegisterForm = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { authUser, isLoading, setAuthUser } = useAuth();
  const toast = useToast();

  const router = useRouter();
  useEffect(() => {
    if (!isLoading && authUser) {
      router.push("/admin/dashboard");
    }
  }, [authUser, isLoading]);

  const singupHandler = async () => {
    if (!email || !password || !username) return;
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);
      await updateProfile(auth.currentUser, {
        displayName: username,
      });
      setAuthUser({
        uid: user.uid,
        email: user.email,
        username,
      });
    } catch (error) {
      console.log(error.message);
      toast({
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
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
    <section className="bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <Image
          src="/Ghanimah_blue_logo_c2 1.svg"
          className="w-fit h-fit relative bottom-[30px]"
          alt="logo"
          width={800}
          height={500}
        />
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-['Poppins'] text-gray-900 dark:text-white">
            SIGN UP
          </h2>
          <p className="mb-5  text-gray-500 sm:text-[15px] dark:text-gray-400 font-['Poppins']">
            Please leave your information below and our consultant will reach
            you out shortly to Sign up
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex justify-center flex-col p-12 mx-auto max-w-lg text-center text-white bg-transparent rounded-lg  shadow xl:p-8">
            <ul role="list" className="mb-8 space-y-4 text-left w-full">
              <div className="bg-black text-white w-full py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90 flex justify-center items-center gap-4 cursor-pointer group">
                <FcGoogle size={22} />
                <span
                  className="font-medium text-white group-hover:text-white"
                  onClick={signInWithGoogle}
                >
                  Login with Google
                </span>
              </div>
              <form onSubmit={(e) => e.preventDefault()}>
                <li className="flex items-center space-x-3  pb-[20px]">
                  <label
                    htmlFor="name"
                    className="relative w-full block overflow-hidden rounded-full border border-gray-200 px-4 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <input
                      type="text"
                      name="Name"
                      placeholder="Name"
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Name
                    </span>
                  </label>
                </li>

                <li className="flex items-center space-x-3  pb-[20px]">
                  <label
                    htmlFor="UserEmail"
                    className="relative w-full block overflow-hidden rounded-full border border-gray-200 px-4 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <input
                      type="email"
                      id="UserEmail"
                      name="Email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Email
                    </span>
                  </label>
                </li>

                <li className="flex items-center space-x-3 pb-[20px]">
                  <label
                    htmlFor="UserEmail"
                    className="relative w-full block overflow-hidden rounded-full border border-gray-200 px-4 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <input
                      type="password"
                      id="Userpassword"
                      name="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />

                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Password
                    </span>
                  </label>
                </li>

                <button
                  className="inline-block  rounded-full  bg-[#232323] font-['Poppins'] hover:shadow-md hover:shadow-[#9ECB1D] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                  type="submit"
                  onClick={singupHandler}
                >
                  <span className="block   rounded-full bg-[#9ECB1D] text-black px-8 py-3 text-sm font-medium hover:bg-transparent hover:text-white">
                    Submit
                  </span>
                </button>

                <p className="text-center text-lg">
                  Back to Login
                  <Link
                    href="/login"
                    className="font-medium text-indigo-500 underline-offset-4 hover:underline ml-2"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
