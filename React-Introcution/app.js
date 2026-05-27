// 
// const heading = document.createElement("h1");
// 
// heading.id = "title";
// 
// heading.innerText = 'React Introduction';
// 
// const app = document.getElementById("app");
// 
// app.appendChild(heading);


console.log(React)
console.log(ReactDOM)

const reactElement = React.createElement("h1", { id: "apps", style: { color: "red" } }, "hello react");
const reactElemen = React.createElement("h3", { id: "apps" }, "hello react");

const root = ReactDOM.createRoot(
        document.getElementById('app')
);

root.render(reactElement)