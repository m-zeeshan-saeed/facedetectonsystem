import React from "react";
import { useEffect, useState } from "react";

import { storage } from "../utils/init-firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Link from "next/link";

export const Crud = () => {
  const [file, setFile] = useState("");
  const [per, setPerc] = useState(null);
  const [data, setData] = useState({});

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }));
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);

  const [details, setDetails] = useState({
    Name: "",
    fatherName: "",
    email: "",
    phone: "",
    studentid: "",
  });

  const PostData = async (e) => {
    e.preventDefault();

    const { Name, fatherName, email, phone, studentid } = details;

    const res = await fetch(
      " https://fypproject-4d536-default-rtdb.firebaseio.com/zeeshanform.json",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name,
          fatherName,
          email,
          phone,
          studentid,
        }),
      }
    );
  };

  return (
    <>
      <section className="bg-black">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-['Poppins'] text-gray-900 dark:text-white">
              Upload Students Data
            </h2>
            <p className="mb-5  text-gray-500 sm:text-[15px] dark:text-gray-400 font-['Poppins']">
              Please leave your information below and our consultant will reach
              you out shortly to upload the students data
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex justify-center flex-col p-12 mx-auto max-w-lg text-center text-white bg-transparent rounded-lg  shadow xl:p-8">
              <ul role="list" className="mb-8 space-y-4 text-left w-full">
                <li className="flex items-center space-x-3 w-full ">
                  <label
                    htmlFor="UserName"
                    className="relative w-full block overflow-hidden rounded-lg border border-gray-200 px-4 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <input
                      type="text"
                      name="UserName"
                      placeholder="Name"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      onChange={(e) =>
                        setDetails({ ...details, Name: e.target.value })
                      }
                    />

                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Name
                    </span>
                  </label>
                </li>
                <li className="flex items-center space-x-3 ">
                  <label
                    htmlFor="UserLastName"
                    className="relative w-full block overflow-hidden rounded-lg border border-gray-200 px-4 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <input
                      type="text"
                      name="LastName"
                      placeholder="Last Name"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      onChange={(e) =>
                        setDetails({ ...details, fatherName: e.target.value })
                      }
                    />

                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Father Name
                    </span>
                  </label>
                </li>
                <li className="flex items-center space-x-3 ">
                  <label
                    htmlFor="Company"
                    className="relative w-full block overflow-hidden rounded-lg border border-gray-200 px-4 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <input
                      type="text"
                      id="Company"
                      name="Company"
                      placeholder="Company"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      onChange={(e) =>
                        setDetails({ ...details, studentid: e.target.value })
                      }
                    />

                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Student ID
                    </span>
                  </label>
                </li>
                <li className="flex items-center space-x-3 ">
                  <label
                    htmlFor="Number"
                    className="relative w-full block overflow-hidden rounded-lg border border-gray-200 px-4 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <input
                      type="tel"
                      id="Company"
                      placeholder="Company"
                      name="Phone"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      onChange={(e) =>
                        setDetails({ ...details, phone: e.target.value })
                      }
                    />

                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Phone
                    </span>
                  </label>
                </li>
                <li className="flex items-center space-x-3 ">
                  <label
                    htmlFor="UserEmail"
                    className="relative w-full block overflow-hidden rounded-md border border-gray-200 px-4 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <input
                      type="email"
                      id="UserEmail"
                      name="Email"
                      placeholder="Email"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      onChange={(e) =>
                        setDetails({ ...details, email: e.target.value })
                      }
                    />

                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      Email
                    </span>
                  </label>
                </li>
                <li className="flex items-center space-x-3 ">
                  <label
                    className="relative w-full block overflow-hidden rounded-md border border-gray-200 px-4 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    htmlFor="File"
                  >
                    <input
                      type="file"
                      id="file"
                      name="file"
                      className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                      File
                    </span>
                  </label>
                </li>

                <button
                  className="inline-block  rounded-full  bg-[#232323] font-['Poppins'] hover:shadow-md hover:shadow-[#9ECB1D] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                  type="submit"
                  onClick={PostData}
                >
                  <span className="block   rounded-full bg-[#9ECB1D] text-black px-8 py-3 text-sm font-medium hover:bg-transparent hover:text-white">
                    Submit
                  </span>
                </button>
                <p className="text-center text-lg">
                  Back to Home
                  <Link
                    href="/"
                    className="font-medium text-indigo-500 underline-offset-4 hover:underline ml-2"
                  >
                    Home
                  </Link>
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
