// index.js
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"
import React from "react"
import ReactDOM from "react-dom"

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