import { NavBar } from "../components/NavBar";

export const Blogs = () => {
  return (
    <>
    <NavBar/>
    <section className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-black">
        Hello and welcome 👋🏻 &nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Cesar</span>
        </span>
      </p>
    </section>
    </>
  );
}