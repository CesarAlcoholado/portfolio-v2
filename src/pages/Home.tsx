import { usePortfolioContext } from "../context/PortfolioContext";

export const Home = () => {

  const { toggleMode } = usePortfolioContext()

  // const toggleMode = ()=> {
  //   document.body.classList.add("dark")
  // }

  return (
    <div className="relative flex flex-col w-full h-[500px] justify-center items-center gap-[10px]">
      {/* <img
          src={planet}
          className="relative object-cover w-full h-full rounded-[100%] inset-ring-[40px]"
          /> */}
      <div className="relative w-[500px] h-[500px] bg-blue-950 rounded-xl before:absolute before:content-[''] before:w-[50px] before:h-[17px] before:bg-transparent before:rounded-br-[12px] before:[box-shadow:5px_5px_#0D1014] before:bottom-[0px] before:right-[373px] z-10"></div>
      <div className="absolute w-[250px] h-[250px] rounded-[100%] bg-indigo-700 border-solid border-[5px] border-[#0D1014] top-[50%] translate-y-[-50%] overflow-hidden z-20"></div>
      <div className="w-[500px] h-[500px] bg-blue-950 rounded-xl"></div>
        <button className="border border-solid border-b-black w-3xs h-10 bg-amber-50" onClick={toggleMode}></button>
    </div>
  );
}