import React from 'react';
import Airtable from 'airtable';
import '../css/orderlist.css'

function OderList({data}){

  function addToCart() {
    console.log("hello");

        // var airtable = require('airtable');
        var base = new Airtable({ apiKey: "keykDvPHYyEvgsIQt"}).base("appPVeSMnCziamPTs");

        if(data.fields.InStock>0){
        const table = base('cart');

        const createRecord = async (fields) => {
            await table.create(fields);
        }
        createRecord({
            SKU: data.fields.SKU,
            ProductName: data.fields.ProductName,
            Price: data.fields.Price,
            Color: data.fields.Color,
            InStock: data.fields.InStock,
        });

        base('savdo').update([
          {
              "id": `${data.id}`,
              "fields": {
                  "InStock": `${data.fields.InStock-1}`
              }
          }
      ])
      }else{
        console.log("Oopsie, Item is out of stock")
      }
  }
  
  return(
  <div className="register">
    <input type="button" value="MyCart" style={{position:'absolute', right: '0', top:'0'}}/>
    {console.log(data)}
    <table className="table">
                <thead>
                    <tr>
                        <th>SKU #</th>
                        <th>Product Name</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Final Price</th>
                        <th>Buy?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr> 
                      <td>{data.fields.SKU}</td>
                      <td>{data.fields.ProductName}</td>
                      <td>{data.fields.Color}</td>
                      <td>{data.fields.Price}</td>
                      <td>{data.fields.InStock}</td>
                      <td>{data.fields.Price}</td>
                      <td><input type="button" value="add to cart" onClick={addToCart} /></td>
                    </tr>
                </tbody>
            </table>
  </div>
  );
}

export default OderList;
