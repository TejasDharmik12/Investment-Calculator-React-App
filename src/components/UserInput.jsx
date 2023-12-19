export default function UserInput({onChange,userInput}){
    // ---------------------Lifted up-------------------------------------
    // const [UserInput,setUserInput] = useState({
    //     initialInvestment:10000,
    //     annualInvestment:1200,
    //     expectedReturn:6,
    //     duration:10,
    // });

    // function handleChange(inputIdentifier,newValue){
    //     setUserInput(prevUserInput=>{
    //         return{
    //             ...prevUserInput,
    //             [inputIdentifier]:newValue
    //         };
    //     });
    // }

// ----------------------------lifted up ---------------------------------

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required 
                    value={userInput.initialInvestment}
                    onChange={(event)=>onChange('initialInvestment',event.target.value)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required
                    value={userInput.annualInvestment}
                    onChange={(event)=>onChange('annualInvestment',event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected return</label>
                    <input type="number" required
                    value={userInput.expectedReturn}
                    onChange={(event)=>onChange('expectedReturn',event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required
                    value={userInput.duration}
                    onChange={(event)=>onChange('duration',event.target.value)}/>
                </p>
            </div>
        </section>
    )
}