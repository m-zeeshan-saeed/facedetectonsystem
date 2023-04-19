import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className=" bg-black py-4 px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-5">
        <img
          src="/Ghanimah_blue_logo_c2 1.svg"
          className="w-fit h-fit"
          alt="loho"
        />
        <div className="flex items-stretch flex-grow bg-[#232323] pl-8 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full py-2 px-2 outline-none bg-transparent text-[#8A8A8A] italic "
          />
          <button className="w-14 text-xs whitespace-nowrap  h-auto flex items-center justify-center rounded-full bg-[#9ECB1D]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9842 15.6825L13.8675 12.575C14.8731 11.2939 15.4187 9.71194 15.4167 8.08334C15.4167 6.63294 14.9866 5.21512 14.1808 4.00915C13.375 2.80319 12.2297 1.86326 10.8897 1.30822C9.54969 0.753177 8.0752 0.607953 6.65267 0.890911C5.23015 1.17387 3.92347 1.8723 2.89789 2.89789C1.8723 3.92347 1.17387 5.23015 0.890911 6.65267C0.607953 8.0752 0.753177 9.54969 1.30822 10.8897C1.86326 12.2297 2.80319 13.375 4.00915 14.1808C5.21512 14.9866 6.63294 15.4167 8.08334 15.4167C9.71194 15.4187 11.2939 14.8731 12.575 13.8675L15.6825 16.9842C15.7677 17.0701 15.8691 17.1383 15.9808 17.1848C16.0925 17.2314 16.2123 17.2553 16.3333 17.2553C16.4543 17.2553 16.5742 17.2314 16.6859 17.1848C16.7976 17.1383 16.899 17.0701 16.9842 16.9842C17.0701 16.899 17.1383 16.7976 17.1848 16.6859C17.2314 16.5742 17.2553 16.4543 17.2553 16.3333C17.2553 16.2123 17.2314 16.0925 17.1848 15.9808C17.1383 15.8691 17.0701 15.7677 16.9842 15.6825ZM2.58334 8.08334C2.58334 6.99554 2.90591 5.93217 3.51025 5.0277C4.1146 4.12323 4.97358 3.41828 5.97858 3.002C6.98357 2.58572 8.08944 2.4768 9.15633 2.68902C10.2232 2.90124 11.2032 3.42506 11.9724 4.19425C12.7416 4.96344 13.2654 5.94344 13.4777 7.01034C13.6899 8.07724 13.581 9.1831 13.1647 10.1881C12.7484 11.1931 12.0434 12.0521 11.139 12.6564C10.2345 13.2608 9.17113 13.5833 8.08334 13.5833C6.62465 13.5833 5.2257 13.0039 4.19425 11.9724C3.1628 10.941 2.58334 9.54203 2.58334 8.08334Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-start gap-4">
          <button className="py-3 px-6 text-xs whitespace-nowrap rounded text-white bg-opacity-20 bg-white font-serif hover:bg-[#9ECB1D] hover:text-black">
            Sign up
          </button>
          <button className="py-3 px-6 text-xs whitespace-nowrap rounded bg-[#9ECB1D] font-serif hover:bg-[#232323]  hover:text-white">
            Sign in
          </button>
        </div>
      </div>
    </section>
  );
}
