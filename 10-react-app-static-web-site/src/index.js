// index.js
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <Page />
    , document.querySelector("#root")
)