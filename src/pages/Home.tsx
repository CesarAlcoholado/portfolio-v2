import { BlogCard } from "../components/BlogCard";
import { Email } from "../components/Email";
import { Github } from "../components/Github";
import { Language } from "../components/Language";
import { Linkedin } from "../components/Linkedin";
import { Location } from "../components/Location";
import { Mode } from "../components/Mode";
import { Profile } from "../components/Profile";
import { ProjectsCard } from "../components/ProjectsCard";
import { Stack } from "../components/Stack";
import { Twitter } from "../components/Twitter";
import { Weather } from "../components/Weather";
import '../index.css'

export const Home = () => {

  return (
    <div className="grid grid-cols-2 w-auto max-w-[2000px] mx-auto gap-2.5 h-auto place-items-center m-1.5 font-montserrat lg:grid-cols-[500px_1fr_1fr] xl:grid-cols-[minmax(500px,1fr)_1fr_1fr_1fr] xl:grid-rows-[minmax(245px,1fr)_minmax(245px,1fr)_1fr_1fr] pb-4 bg-[url(/bg.avif)] bg-repeat-y bg-center">
      <Profile />
      <Mode />
      <Language />
      <Location />
      <BlogCard />
      <Weather />
      <ProjectsCard />
      <Stack />
      <Twitter />
      <Linkedin />
      <Email />
      <Github />
    </div>
  );
}