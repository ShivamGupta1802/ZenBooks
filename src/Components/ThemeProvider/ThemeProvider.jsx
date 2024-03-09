'use client'

import { useEffect,useState } from "react"
import ThemeContext from "@/Context/themeContext"

import React from 'react'

const ThemeProvider = ({children}) => {
    const themeFromStorage=typeof localStorage!=='undefined' && localStorage.getItem('hotel-theme')?JSON.parse(localStorage.getItem('hotel-theme')):false;
    const [darkTheme, setDarkTheme] = useState(themeFromStorage)
    const [renderComponent, setrenderComponent] = useState(false)

    useEffect(() => {
     setrenderComponent(true);
    }, []);
     
    if(!renderComponent) return <></>;
  return (
    <ThemeContext.Provider value={{darkTheme,setDarkTheme}}>
        <div className={`${darkTheme?'dark':''} min-h-screen`}>
            <div className="dark:text-white dark:bg-black text-[#1E1E1E]">
                {children}
            </div>
        </div>

    </ThemeContext.Provider>
  )
}

export default ThemeProvider
