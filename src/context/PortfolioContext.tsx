import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type PortfolioContext = {
  toggleMode: ()=>void;
  // toggleLang: ()=> void;
}

type PortfolioProviderProps = {
  children: ReactNode
}

const PortfolioContext = createContext({} as PortfolioContext);

export const usePortfolioContext = () => {
  return useContext(PortfolioContext);
};

export function PortfolioProvider ({children}: PortfolioProviderProps) {
  const storedTheme = localStorage.getItem("theme");
  const initialTheme = storedTheme ? storedTheme : "light";
  const [theme, setTheme] = useState<string>(
    initialTheme
  );
   const body = document.body;
   
   const toggleMode = () => {
     if (theme === "dark") {
       body.classList.replace("dark", "light");
       setTheme("light")
      } else {
        body.classList.replace("light", "dark");
        setTheme("dark")
      }
      console.log('tema: ', theme);
    }
    
  return (
    <PortfolioContext.Provider
    value={{
      toggleMode,
    }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

