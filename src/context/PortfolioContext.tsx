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
  const body = document.body;
  const storedTheme = localStorage.getItem("theme");
  if(storedTheme) {
    body.classList.add(storedTheme)
  }else {
    body.classList.add("light")
  } 
  const initialTheme = storedTheme ? storedTheme : "light";
  const [theme, setTheme] = useState<string>(
    initialTheme
  );
   
  //  const toggleMode = () => {
  //    if (theme === "dark") {
  //      body.classList.replace("dark", "light");
  //      setTheme("light")
  //      localStorage.setItem("theme", "light")
  //     } else {
  //       body.classList.replace("light", "dark");
  //       setTheme("dark")
  //      localStorage.setItem("theme", "dark")
  //     }
  //   }
    const toggleMode = () => {
      const newTheme = theme === "dark" ? "light" : "dark";
      body.classList.replace(theme, newTheme); // Reemplaza directamente el tema actual
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    };
    
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

