import { usePortfolioContext } from "../context/PortfolioContext";

export const Home = () => {

  const { toggleMode, theme } = usePortfolioContext();

  // interface Bg {
  //   [key: string]: string,
  // }

  // const background: Bg  = {
  //   "dark": "bg-cardDark",
  //   "light": "bg-cardLight"
  // }

  // const toggleMode = ()=> {
  //   document.body.classList.add("dark")
  // }

  return (
    // <div className="relative flex flex-col w-full h-[500px] justify-center items-center gap-[10px]">
    <div className="grid grid-cols-2 w-auto gap-2.5 h-auto place-items-center m-1.5">
      <div className="col-span-2 w-full h-[250px] rounded-md bg-cardLight border-borderLight border-[10px] border-solid dark:bg-cardDark dark:border-borderDark shadow-sm shadow-gray-900/5"></div>
      <div className="w-full h-[130px] rounded-md bg-cardLight border-borderLight border-[10px] border-solid dark:bg-cardDark dark:border-borderDark shadow-sm shadow-gray-900/5">
        <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2">
          <span className="text-[12px] text-gray-500">lang.</span>
          <p className="flex gap-1 text-3xl text-gray-500 font-medium">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#6a7282"
              width={"24px"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
              />
            </svg>
            ES
          </p>
        </div>
      </div>
      <div className="w-full h-[130px] rounded-md bg-cardLight border-borderLight border-[10px] border-solid dark:bg-cardDark dark:border-borderDark shadow-sm shadow-gray-900/5">
        <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2">
          <span className="text-[12px] text-gray-500">{theme}</span>
          <p className="flex text-3xl text-gray-500 font-medium">MODE</p>
        </div>
      </div>
      <div className="w-full h-[130px] col-span-2 rounded-md bg-cardLight border-borderLight border-[10px] border-solid dark:bg-cardDark dark:border-borderDark shadow-sm shadow-gray-900/5">
        <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2">
          <span className="text-[12px] text-gray-500">location</span>
          <p className="flex text-3xl text-gray-500 font-medium">Buenos Aires</p>
        </div>
      </div>
      <div className="w-full h-[130px] col-span-2 rounded-md bg-cardLight border-borderLight border-[10px] border-solid dark:bg-cardDark dark:border-borderDark shadow-sm shadow-gray-900/5">
        <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2">
          <span className="text-[12px] text-gray-500">Blog</span>
          <p className="flex text-3xl text-gray-500 font-medium">Lorem Ipsum</p>
        </div>
      </div>
      {/* <img
          src={planet}
          className="relative object-cover w-full h-full rounded-[100%] inset-ring-[40px]"
          /> */}
      {/* <div className="relative w-[500px] h-[500px] bg-blue-950 rounded-xl before:absolute before:content-[''] before:w-[50px] before:h-[17px] before:bg-transparent before:rounded-br-[12px] before:[box-shadow:5px_5px_#0D1014] before:bottom-[0px] before:right-[373px] z-10"></div>
      <div className="absolute w-[250px] h-[250px] rounded-[100%] bg-indigo-700 border-solid border-[5px] border-[#0D1014] top-[50%] translate-y-[-50%] overflow-hidden z-20"></div>
      <div className="w-[500px] h-[500px] bg-blue-950 rounded-xl"></div>
        <button className="border border-solid border-b-black w-3xs h-10 bg-amber-50" onClick={toggleMode}></button> */}
    </div>
  );
}