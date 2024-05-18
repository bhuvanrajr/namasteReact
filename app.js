const parent = React.createElement("div",{
    id:"parent",
},
React.createElement("div",{id:"child"},
React.createElement("h1",{id:"header"},"I am h1 Tag")));

// const header = React.createElement("h1",{
//     id:"header"
// },"Hello world from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);