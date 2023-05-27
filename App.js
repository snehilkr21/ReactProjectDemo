const heading1 = React.createElement("h1",{
    id : "h1tag",
},"Heading1")
const heading2 = React.createElement("h2",{
    id : "h2tag",
},"Heading23")
const div1 = React.createElement("div",{
    id : "container",
},[heading1,heading2])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(div1) 