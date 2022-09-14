import { createContext } from "react";

const tema = {
    theme: "",
    setTheme: () => {},
};

export const ThemeContext = createContext(tema);
