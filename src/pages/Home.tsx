import { BlogCard } from "../components/BlogCard";
import { Email } from "../components/Email";
import { Github } from "../components/Github";
import { Language } from "../components/Language";
import { Linkedin } from "../components/Linkedin";
import { Location } from "../components/Location";
import { Mode } from "../components/Mode";
import { Profile } from "../components/Profile";
import { Projects } from "../components/Projects";
import { Stack } from "../components/Stack";
import { Twitter } from "../components/Twitter";
import { Weather } from "../components/Weather";
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
      <Profile/>
      <Language/>
      <Mode/>
      <Location/>
      <BlogCard/>
      <Weather/>
      <Projects/>
      <Stack/>
      <Twitter/>
      <Linkedin/>
      <Email/>
      <Github/>
    </div>
  );
}