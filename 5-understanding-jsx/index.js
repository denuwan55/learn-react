// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

const headerAsJSX = <h1>Understanding JSX</h1>
console.log(headerAsJSX)

ReactDOM.render(
    <div>
        <h1>Understanding JSX</h1>
        <p>This is JSX</p>
    </div>
    , document.getElementById("root")
)

/* 
    So JSX is a sort of a language written by react team, such that it takes in html elements inside the javascript file and spits out 
    some sort of an object that react can understand to render html
*/