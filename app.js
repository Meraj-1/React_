// const heading = React.createElement("h1", null, "Hello World   kibdscpks using React");
// const pare = React.createElement("span", null, "HEllo for span")

// const container = React.createElement("div",null, heading, pare)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container)

// const header = document.createElement("h1")
// header.innerText = "Hello Document from react"
// const root = document.getElementById("root");
// root.appendChild(header)


// const header = React.createElement("h1", null, "Hello from react header");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);

// const heading = React.createElement( "h1", { id: "heading", xyz: "abc" },  "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1",{}, "I am an h1 tag" ) ));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


// const App = () =>  {
// return(React.createElement("div", { id : "parent" }, React.createElement("div", { id : "child" }, React.createElement("h1", {}, "Hello App its a function"))))}
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(App());


// const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, React.createElement("h1", {}, "h1 is the sibling"), React.createElement("h2", {}, "rivhrefdv")));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


// const parent = React.createElement("div", {id : "parent"}, [
//    React.createElement("div", {id : "child1" }, React.createElement("h1", {}, "1 heading"), React.createElement("h1", {}, "2 heading" )),],
//  [
//     React.createElement("div" , {id: "child2"}, React.createElement("h1", {}, "h3 heading"), React.createElement("h1", {}, '4th heading'))
//  ]
// )
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent);

// const child1 = React.createElement("div", {id: "child1"}, [
//     React.createElement("h1", {}, "1 text of child one"),
//     React.createElement("h1", {}, "2nd text of child 1")
// ]);

// const child2 = React.createElement("div", {id: "child2"}, [
//    React.createElement("h1", {}, "1st text of second text"),
//    React.createElement("h1", {}, "2nd text of 2nd child")
// ]);
// const parent = React.createElement("div", {}, [ child1 , child2 ] );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// const heading ()

// import React from 'react'
// import {ReactDOM} from "react-dom/client";

// const heading = React.createElement("h1", {}, "HELLO REACT");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// const ele = "hello";

// const title = () => {
//     return(
//  <h1>{ele}</h1>
// )};
// console.log(title);



const f = async () => {
    await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", {
        headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/237.84.2.178 Safari/537.36", 
            contentType: "application/json",
        },
    })
       .then((res) => res.json())
       .then((res) => console.log(res.data.cards[0].card.card))
       .catch((err) => console.log(err));
 };
 f();

 "https://newsapi.org/v2/top-headlines?country=&category=business&apiKey=d879fb7e8f89476d8c2c056f6e58dba5"