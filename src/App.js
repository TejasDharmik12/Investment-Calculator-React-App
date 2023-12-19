
import Header from "./components/Header.jsx"
import { useState } from "react";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
});

// user input validity check
const inputIsValid = userInput.duration >=1;

function handleChange(inputIdentifier,newValue){
    setUserInput(prevUserInput=>{
        return{
            ...prevUserInput,
            [inputIdentifier]:+newValue
        };
    });
}
  return (
    <>
    <Header/>
    {/* both userInput and Results components are sharing the states of userInput */}

{/* <UserInput/> */}
    <UserInput userInput={userInput} onChange={handleChange}/>
    {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
    {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App

