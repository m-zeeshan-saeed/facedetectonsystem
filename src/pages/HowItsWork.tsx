import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

export default function HowItWork() {
  return (
    <>
      {/* circle image section*/}
      <div className="bg-black font-['Poppins'] relative text-[14px] w-full ">
        <div className="flex items-center relative justify-start">
          <Image
            src={"/circle.png"}
            alt="cicle-img"
            width={"600"}
            height={"600"}
            className="bottom-[150px] relative"
          />
          <div className="absolute left-[80px]  z-10">
            <Image
              src={"/login_image.png"}
              alt=""
              width={"500"}
              height={"500"}
              className="relative bottom-[150px]"
            />
          </div>
          {/*how it work section*/}
          <div className="  relative text-[32px] w-[50%] box-border float-left  pr-4 pl-4 ">
            <div className="pl-[85px] ">
              <div className="mb-[40px]">
                <h3 className="text-[32px] font-semibold">
                  How does this App Work?
                </h3>
              </div>
              <div className="pt-[30px] pb-[45px] mb-[40px] relative ">
                <div className="w-[2px] h-[100%] bg-[url('https://attendlab.com/wp-content/themes/appilo/images/gradient-sep.png')] relative top-0 left-[45px]">
                  <div className="ml-[-35px]">
                    <div className=" table-cell align-middle ">
                      <div className="w-[74px] text-xs whitespace-nowrap  h-[74px] flex items-center justify-center rounded-full bg-[#9ECB1D] hover:shadow-md hover:shadow-[#ffffff] ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="44"
                          height="44"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                        </svg>
                      </div>
                      <div className="pl-[100px] whitespace-nowrap relative bottom-[80px] ">
                        <h4 className="text-[20px] font-medium">
                          Free Sign-up
                        </h4>
                        <p className="mt-[10px] text-[14px] ">
                          Just click free signup button,
                          <br /> enter Admin and Business information
                        </p>
                      </div>
                      <div className="w-[74px] text-xs whitespace-nowrap  h-[74px] flex items-center justify-center rounded-full bg-[#9ECB1D] hover:shadow-md hover:shadow-[#ffffff] ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="44"
                          height="44"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                          <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z" />
                        </svg>
                      </div>
                      <div className="pl-[100px] whitespace-nowrap relative bottom-[80px]">
                        <h4 className="text-[20px] font-medium">
                          Upload Employees Photos
                        </h4>
                        <p className="mt-[10px] text-[14px] ">
                          Browse to employees, enter their information,
                          <br /> location, and upload a clear photo for each
                          employee
                        </p>
                      </div>
                      <div className="w-[74px] text-xs whitespace-nowrap  h-[74px] flex items-center justify-center rounded-full bg-[#9ECB1D] hover:shadow-md hover:shadow-[#ffffff] ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="44"
                          height="44"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z" />
                        </svg>
                      </div>
                      <div className="pl-[100px] whitespace-nowrap relative bottom-[80px]">
                        <h4 className="text-[20px] font-medium">
                          Download the App and Start
                        </h4>
                        <p className="mt-[10px] text-[14px] ">
                          Download the App to a phone or tablet.
                          <br /> Add device in the web application, connect the
                          mobile
                          <br /> App to your account by scanning the QR code
                          appears <br />
                          on the screen by the device camera
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*button section*/}
                <div>
                  <Link href="/page404">
                    <button className="py-5 px-9 whitespace-nowrap rounded-[80px] text-white bg-opacity-20 bg-white font-['Poppins']  text-base font-bold shadow-md hover:shadow-[#9ECB1D] inline-block align-middle relative pl-[80px] pr-[40px]">
                      <i className=" absolute top-[25%] left-[25px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                        </svg>
                      </i>
                      <span className="relative grid">
                        <span>Coming soon</span>
                        <span>APP STORE</span>
                      </span>
                    </button>
                  </Link>
                  <Link href="/page404">
                    <button className="py-5 px-8 whitespace-nowrap rounded-[80px] text-black  font-['Poppins']  text-base ml-[25px] font-bold bg-[#9ECB1D]  hover:text-white hover:bg-[#232323] hover:shadow-md hover:shadow-[#9ECB1D] inline-block align-middle relative p-[12px ,0] pl-[80px] pr-[40px]">
                      <i className="absolute top-[25%] left-[25px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z" />
                        </svg>
                      </i>
                      <span className=" relative grid">
                        <span>Coming soon</span>
                        <span>GOOGLE PLAY</span>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
