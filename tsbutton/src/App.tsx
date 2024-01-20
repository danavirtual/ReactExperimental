import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from "./components/CustomButtonComponent";
// import the CustomLabel component
import CustomLabel from "./components/CustomLabel";

// write a function to handle the click event
const handleClick = () => {
  alert("You clicked on the  circle!");

  const button = document.querySelector("button");
  button!.style.backgroundColor = "blue";
  button!.textContent = "Claimant is John Doe!";
  button!.style.color = "white";
  button!.style.border = "2px dashed blue";
  button!.style.height = "100px";

}

function App() {
  return (
    <>
      <h1>Colorful Custom Button Components</h1>
      <div>
        <Button 
          border="2px solid black"
          color="pink"
          height = "200px"
          onClick={() => handleClick()}
          radius = "50%"
          width = "200px"
          children = "The Pink Circle!"
        />
        <br />
        <br />
        <Button 
          border="2px solid black"
          color="red"
          height = "200px"
          onClick={() => handleClick()}
          radius = "50%"
          width = "200px"
          children = "The Red Circle!"
        />
        <br />
        <br />

        <CustomLabel 
        // use style prop to set the style
        style={{color: 'red', fontFamily: 'Times New Roman', fontSize: '20px'}}
        text="Calimant 42" />
      </div>
    </>
  );
}

export default App;
