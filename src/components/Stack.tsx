export const Stack = () => {
  return (
    <div className="col-span-2 w-full h-[250px] rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5">
      <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-4 dark:border-gray-800">
        <h3 className="text-3xl text-gray-500 dark:text-gray-200 text-center">What i use</h3>
        <ul className="list-none flex flex-col flex-wrap h-44 p-5 pt-0">
          <li className="text-md text-gray-700 font-light dark:text-gray-200 ml-3">React</li>
          <li className="text-md text-gray-700 font-light dark:text-gray-200 ml-3">Redux</li>
          <li className="text-md text-gray-700 font-light dark:text-gray-200 ml-3">Tailwind</li>
          <li className="text-md text-gray-700 font-light dark:text-gray-200 ml-3">Typescript</li>
          <li className="text-md text-gray-700 font-light dark:text-gray-200 ml-3">Figma</li>
          <li className="text-md text-gray-700 font-light dark:text-gray-200 ml-3">CSS</li>
          <li className="text-md text-gray-700 font-light dark:text-gray-200 ml-3">HTML</li>
          <li className="text-md text-gray-700 font-light dark:text-gray-200 ml-3">Node</li>
          <li className="text-md text-gray-700 font-light dark:text-gray-200 ml-3">Github</li>
        </ul>
      </div>
    </div>
  );
};
