import Image from "next/image";
import Link from "next/link";

export default function signup() {
  return (
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
              <li className="flex items-center space-x-3 w-full ">
                <label
                  htmlFor="UserName"
                  className="relative w-full block overflow-hidden rounded-lg border border-gray-200 px-4 pt-5 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                  <input
                    type="text"
                    id="UserName"
                    name="UserName"
                    placeholder="Name"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
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
                    id="LastName"
                    name="LastName"
                    placeholder="Last Name"
                    className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                  />

                  <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Last Name
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
                  />

                  <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    Company
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
                  />

                  <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                    File
                  </span>
                </label>
              </li>
              <a
                className="inline-block  rounded-full  bg-[#232323] font-['Poppins'] hover:shadow-md hover:shadow-[#9ECB1D] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                href=""
              >
                <span className="block   rounded-full bg-[#9ECB1D] text-black px-8 py-3 text-sm font-medium hover:bg-transparent hover:text-white">
                  Submit
                </span>
              </a>
              <p className="text-center text-lg">
                Back to Login
                <Link
                  href="/login"
                  className="font-medium text-indigo-500 underline-offset-4 hover:underline ml-2"
                >
                  Login
                </Link>
              </p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
