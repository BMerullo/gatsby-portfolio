import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
