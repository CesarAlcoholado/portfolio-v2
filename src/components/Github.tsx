import GitHubCalendar from 'react-github-calendar';
import { usePortfolioContext } from '../context/PortfolioContext';


export const Github = () => {
  const { theme } = usePortfolioContext()

  return (
    <div className="w-full col-span-2 h-auto rounded-md bg-cardLight border-borderLight border-4 border-solid dark:bg-backgroundDark dark:border-borderDark shadow-sm shadow-gray-900/5">
      <div className="w-auto flex flex-col gap-2 justify-center items-center border-gray-100 rounded-md border-[1px] dark:border-gray-800  overflow-hidden p-6">
        <p className="text-3xl text-gray-500 dark:text-gray-200 font-medium font-firaSans">
          GITHUB
        </p>
        <GitHubCalendar
          username="cesaralcoholado"
          fontSize={8}
          hideColorLegend={true}
          hideTotalCount={true}
          style={{
            width: "100%",
            height: "100%",
            color: `${theme == "dark" ? "#e5e7eb" : "#6a7282"}`,
          }}
          colorScheme={`${theme == "dark" ? "light" : "dark"}`}
        />
      </div>
    </div>
  );
};
