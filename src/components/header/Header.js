import React from 'react'
import { Navbar } from "../navbar/Navbar"
import { Mini_navbar } from "../navbar/Mini-navbar"

export const Header = () => {
    return (
        <>
            <Mini_navbar />
            <Navbar />
        </>
    )
}