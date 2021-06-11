import React, {useState, useEffect} from 'react';
import Airtable from 'airtable';
import Navbar from './RightNav';
import OrderList from './OrderList'
import '../css/lookup.css'



const base = new Airtable({ apiKey: 'keykDvPHYyEvgsIQt'}).base("appPVeSMnCziamPTs");


function Lookup() {

    const [userInput, setuserInput] = useState(""); // User input stored here
    const [haveData, sethaveData] = useState(false);
    const [item, setItem] = useState([])
    const [Data, setData] = useState([]);

    // filterByFormula: `AND(Lower("${data.fields.CustodianFirst}") = Lower({FirstName}), 
    // Lower("${data.fields.CustodianLast}") = Lower({LastName}))` 

    // Search first and last name of record data, corresponding to a given row, in the ID table to get a ID number record. Requires an exact match
    useEffect(() => {
      base("savdo")
          .select({maxRecords: 100, view: "Grid view"}).eachPage((records, fetchNextPage) => {
              setData(records)
              fetchNextPage();
          });
  }, []);


  function ValidateInput() {
    Data.map(record => {
      if(record.fields.SKU == userInput){
        sethaveData(true);
        setItem(record);
      }
      return 0;
    })
  }


    // Capture user input
  function handleChange(event) {
    setuserInput(userInput + event.target.value);
  }
  return (
    <div>
      <Navbar />
      <div>
        <div className="input">
        <label>Your item ID: &nbsp; &nbsp;</label>
        <input placeholder={userInput} readOnly/>
        </div>
      <div className="buttons">
        <button>
          <i className="fas fa-print"></i>
          Print
          </button>
        <button onClick={handleChange} value="1">1</button>
        <button onClick={handleChange} value="2">2</button>
        <button onClick={handleChange} value="3">3</button>
        <button>
          <i className="fas fa-ban"></i>
            Void
            </button>
        <button onClick={handleChange} value="4">4</button>
        <button onClick={handleChange} value="5">5</button>
        <button onClick={handleChange} value="6">6</button>
        <button><i className="fa fa-times"></i>
            QTY
            </button>
        <button onClick={handleChange} value="7">7</button>
        <button onClick={handleChange} value="8">8</button>
        <button onClick={handleChange} value="9">9</button>
        <button>
          <i className="fas fa-sign-out-alt"></i>
              Exit
              </button>
        <button onClick={ValidateInput}>Confirm</button>
        <button onClick={handleChange} value="0">0</button>
        <button onClick={handleChange} value=".00">.00</button>
      </div>
      </div>
      { haveData ? <OrderList data={item} /> : null }    </div>
    );
    
}


export default Lookup;