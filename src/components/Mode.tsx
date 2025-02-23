
import { usePortfolioContext } from "../context/PortfolioContext"

export const Mode = () => {
  const { theme, toggleMode } = usePortfolioContext()

  return (
          <div className="w-full h-[130px] rounded-md bg-cardLight border-borderLight border-2 border-solid dark:bg-cardDark dark:border-borderDark shadow-sm shadow-gray-900/5" onClick={toggleMode}>
            <div className="h-full w-full border-gray-100 rounded-md border-[1px] flex flex-col justify-center items-center gap-1.5 p-2 dark:border-gray-800">
              <span className="text-[12px] text-gray-500 dark:text-gray-200">
                {theme}
              </span>
              <p className="flex text-3xl text-gray-500 font-medium dark:text-gray-200">
                MODE
              </p>
            </div>
          </div>
  )
}