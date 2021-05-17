import React, {useState} from 'react';
import '../css/lookup.css'


function Lookup() {

    const [userInput, setuserInput] = useState([]); // User input stored here

    // Capture user input
  function handleChange(event) {
    setuserInput(event.target.value);
  }
    return(
        <div>
        <div className="buttons">
        <button>
          <i className="fas fa-print"></i>
          Print
          </button>
          <button onClick = {handleChange} value="1">1</button>
          <button onClick = {handleChange} value="2">2</button>
          <button onClick = {handleChange} value="3">3</button>
          <button>
            <i className="fas fa-ban"></i> 
            Void
            </button>
            <button onClick = {handleChange} value="4">4</button>
            <button onClick = {handleChange} value="5">5</button>
            <button onClick = {handleChange} value="6">6</button>
            <button><i className="fa fa-times"></i>
            QTY
            </button>
            <button onClick = {handleChange} value="7">7</button>
            <button onClick = {handleChange} value="8">8</button>
            <button onClick = {handleChange} value="9">9</button>
            <button>
              <i className="fas fa-sign-out-alt"></i>
              Exit
              </button>
              <div></div>
              <button onClick = {handleChange} value="0">0</button>
              <button onClick = {handleChange} value=".00">.00</button>
        </div>
             <div className="SKUnumber">
                 {console.log(userInput)}
               {/* <input placeholder="0">{userInput}</input> */}
             </div>
             </div>
    );
    
}


export default Lookup;