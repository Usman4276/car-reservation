import React from "react"
import { ThemeProvider } from "@material-ui/styles"
import { theme } from "../../assets/css/theme_style/Theme"
import { Hero } from "../hero/Hero"
import { Footer } from "../footer/Footer"

export const Layout = ({ children }) => {
    
    return (
        <>
            <ThemeProvider theme={theme}>
                <Hero />
                {children}
                <Footer />
            </ThemeProvider>

        </>
    )
}
