import Image from "next/image";
import { Inter } from "next/font/google";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const inter = Inter({ subsets: ["latin"] });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

{
  /*custom arrow style*/
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
export default function Feature() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "40px",
          color: "blue",
          borderBottom: "1px  #9ECB1D  solid",
          height: "50px",
        }}
      ></div>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-black font-['Poppins'] text-[14px] ">
        <div className="border-box w-full px-[15px] container mx-auto">
          <div>
            <section>
              <div className="container">
                <div className="mb-[100px] text-center text-white">
                  <h2 className="text-[32px] font-semibold ">
                    Ghanimah® Awesome Features
                  </h2>
                  <p className="text-[16px] max-w-3xl mx-auto text-center mt-[20px] text-white">
                    In addition to using recent Face Recognition Technology,
                    Ghanimah® has great features that don’t find in any other
                    Apps in the market
                  </p>
                </div>
                {/*carousel card*/}
                <div className="carousel p-[5rem] pt-5 bg-black text-white h-[100vh] w-[100vw] ">
                  <Slider {...settings}>
                    <div className="box  h-[100px] ">
                      <div className="text-center">
                        <i className="font-[italic] inline-block align-text-top ml-[5px] transition-all h-auto w-auto font-[45px] leading-[50px] text-[#9ECB1D]   ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="bi bi-android2"
                            viewBox="0 0 16 16"
                          >
                            <path d="m10.213 1.471.691-1.26c.046-.083.03-.147-.048-.192-.085-.038-.15-.019-.195.058l-.7 1.27A4.832 4.832 0 0 0 8.005.941c-.688 0-1.34.135-1.956.404l-.7-1.27C5.303 0 5.239-.018 5.154.02c-.078.046-.094.11-.049.193l.691 1.259a4.25 4.25 0 0 0-1.673 1.476A3.697 3.697 0 0 0 3.5 5.02h9c0-.75-.208-1.44-.623-2.072a4.266 4.266 0 0 0-1.664-1.476ZM6.22 3.303a.367.367 0 0 1-.267.11.35.35 0 0 1-.263-.11.366.366 0 0 1-.107-.264.37.37 0 0 1 .107-.265.351.351 0 0 1 .263-.11c.103 0 .193.037.267.11a.36.36 0 0 1 .112.265.36.36 0 0 1-.112.264Zm4.101 0a.351.351 0 0 1-.262.11.366.366 0 0 1-.268-.11.358.358 0 0 1-.112-.264c0-.103.037-.191.112-.265a.367.367 0 0 1 .268-.11c.104 0 .19.037.262.11a.367.367 0 0 1 .107.265c0 .102-.035.19-.107.264ZM3.5 11.77c0 .294.104.544.311.75.208.204.46.307.76.307h.758l.01 2.182c0 .276.097.51.292.703a.961.961 0 0 0 .7.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h1.343v2.182c0 .276.097.51.292.703a.972.972 0 0 0 .71.288.973.973 0 0 0 .71-.288.95.95 0 0 0 .292-.703v-2.182h.76c.291 0 .54-.103.749-.308.207-.205.311-.455.311-.75V5.365h-9v6.404Zm10.495-6.587a.983.983 0 0 0-.702.278.91.91 0 0 0-.293.685v4.063c0 .271.098.501.293.69a.97.97 0 0 0 .702.284c.28 0 .517-.095.712-.284a.924.924 0 0 0 .293-.69V6.146a.91.91 0 0 0-.293-.685.995.995 0 0 0-.712-.278Zm-12.702.283a.985.985 0 0 1 .712-.283c.273 0 .507.094.702.283a.913.913 0 0 1 .293.68v4.063a.932.932 0 0 1-.288.69.97.97 0 0 1-.707.284.986.986 0 0 1-.712-.284.924.924 0 0 1-.293-.69V6.146c0-.264.098-.491.293-.68Z" />
                          </svg>
                        </i>

                        <h3 className="mt-[17px] mb-[17px] text-[20px] font-medium">
                          Any Android Device
                        </h3>
                        <p className="mb-[50px]">
                          You don’t need a special device,
                          <br /> just use any Android mobile or tablet
                        </p>
                      </div>
                    </div>
                    <div className="box h-[100px]">
                      <div className="text-center">
                        <i className="font-[italic] inline-block align-text-top ml-[5px] transition-all h-auto w-auto font-[45px] leading-[50px] text-[#9ECB1D]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="bi bi-tools"
                            viewBox="0 0 16 16"
                          >
                            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
                          </svg>
                        </i>

                        <h3 className="mt-[17px] mb-[17px] text-[20px] font-medium">
                          Audit Log
                        </h3>
                        <p className="mb-[50px]">
                          Admin can easily track other users’ activities and
                          know when they login or out, and what they have done
                        </p>
                      </div>
                    </div>
                    <div className="box  h-[100px]">
                      <div className="text-center">
                        <i className="font-[italic] inline-block align-text-top ml-[5px] transition-all h-auto w-auto font-[45px] leading-[50px] text-[#9ECB1D]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="bi bi-display"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
                          </svg>
                        </i>

                        <h3 className="mt-[17px] mb-[17px] text-[20px] font-medium">
                          Multi Users
                        </h3>
                        <p className="mb-[50px]">
                          In addition to the Admin who has full system rights,
                          Admin can invite other users and grant them access
                          permissions as needed
                        </p>
                      </div>
                    </div>
                    <div className="box  h-[100px]">
                      <div className="text-center">
                        <i className="font-[italic] inline-block align-text-top ml-[5px] transition-all h-auto w-auto font-[45px] leading-[50px] text-[#9ECB1D]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="bi bi-palette"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z" />
                          </svg>
                        </i>

                        <h3 className="mt-[17px] mb-[17px] text-[20px] font-medium">
                          Multi Time Zones
                        </h3>
                        <p className="mb-[50px]">
                          Ghanimah® manages multi time zones attendance, so it
                          supports companies having global branches and performs
                          the time zones conversion.
                        </p>
                      </div>
                    </div>
                    <div className="box  h-[100px]">
                      <div className="text-center">
                        <i className="font-[italic] inline-block align-text-top ml-[5px] transition-all h-auto w-auto font-[45px] leading-[50px] text-[#9ECB1D]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="bi bi-palette"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z" />
                          </svg>
                        </i>

                        <h3 className="mt-[17px] mb-[17px] text-[20px] font-medium">
                          Unlimitted Scalabllity
                        </h3>
                        <p className="mb-[50px]">
                          Ghanimah@ fits small, medium, and large Enterprises.
                          You can start with one user, one employee, and one
                          device; eventually you can add more - unlimitted -
                          number of resources as your business grows
                        </p>
                      </div>
                    </div>
                    <div className="box  h-[100px]">
                      <div className="text-center">
                        <i className="font-[italic] inline-block align-text-top ml-[5px] transition-all h-auto w-auto font-[45px] leading-[50px] text-[#9ECB1D]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="bi bi-google-play"
                            viewBox="0 0 16 16"
                          >
                            <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z" />
                          </svg>
                        </i>

                        <h3 className="mt-[17px] mb-[17px] text-[20px] font-medium">
                          Free
                        </h3>
                        <p className="mb-[50px]">
                          No credit card is even required,
                          <br /> you can start using the App right away <br />
                          to track your employee’s attendance for FREE.
                        </p>
                      </div>
                    </div>
                    <div className="box  h-[100px]">
                      <div className="text-center">
                        <i className="font-[italic] inline-block align-text-top ml-[5px] transition-all h-auto w-auto font-[45px] leading-[50px] text-[#9ECB1D]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="bi bi-tools"
                            viewBox="0 0 16 16"
                          >
                            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
                          </svg>
                        </i>

                        <h3 className="mt-[17px] mb-[17px] text-[20px] font-medium">
                          Indoor and Outdoor
                        </h3>
                        <p className="mb-[50px]">
                          It works remotely and it can be used anywhere,
                          <br /> you just need an Android Device connected{" "}
                          <br />
                          to the internet!
                        </p>
                      </div>
                    </div>
                    <div className="box  h-[100px]">
                      <div className="text-center">
                        <i className="font-[italic] inline-block align-text-top ml-[5px] transition-all h-auto w-auto font-[45px] leading-[50px] text-[#9ECB1D]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="bi bi-cloud-download"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                            <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z" />
                          </svg>
                        </i>

                        <h3 className="mt-[17px] mb-[17px] text-[20px] font-medium">
                          100% Cloud
                        </h3>
                        <p className="mb-[50px]">
                          The first Face Recognition Attendance System that
                          works 100% over the cloud, you don’t need to worry
                          your data securely stored and backup.
                        </p>
                      </div>
                    </div>
                    <div className="box  h-[100px]">
                      <div className="text-center">
                        <i className="font-[italic] inline-block align-text-top ml-[5px] transition-all h-auto w-auto font-[45px] leading-[50px] text-[#9ECB1D]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="bi bi-gem"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6l3-4zm11.386 3.785-1.806-2.41-.776 2.413 2.582-.003zm-3.633.004.961-2.989H4.186l.963 2.995 5.704-.006zM5.47 5.495 8 13.366l2.532-7.876-5.062.005zm-1.371-.999-.78-2.422-1.818 2.425 2.598-.003zM1.499 5.5l5.113 6.817-2.192-6.82L1.5 5.5zm7.889 6.817 5.123-6.83-2.928.002-2.195 6.828z" />
                          </svg>
                        </i>

                        <h3 className="mt-[17px] mb-[17px] text-[20px] font-medium">
                          IP and GEO Restrictions
                        </h3>
                        <p className="mb-[50px]">
                          Restrict employees and devices from reporting face
                          attendances using IP Address,
                          <br /> Location on Map, or both
                        </p>
                      </div>
                    </div>
                    <div className="box  h-[100px]">
                      <div className="text-center">
                        <i className="font-[italic] inline-block align-text-top ml-[5px] transition-all h-auto w-auto font-[45px] leading-[50px] text-[#9ECB1D]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="currentColor"
                            className="bi bi-apple"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                            <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                          </svg>
                        </i>

                        <h3 className="mt-[17px] mb-[17px] text-[20px] font-medium">
                          No Installation
                        </h3>
                        <p className="mb-[50px]">
                          No technician needs to visit your office.
                          <br /> You don’t need servers, special devices,
                          <br /> or networking to use Ghanimah®
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
