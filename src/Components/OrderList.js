import React from 'react';
import '../css/orderlist.css'

function OderList({data}){
  
  return(
  <div className="register">
    {console.log(data)}
    <li>Product Name: {data.fields.ProductName}</li>
    <li>SKU number: {data.fields.SKU}</li>
    <li>Stock: {data.fields.InStock}</li>
    <li>Color: {data.fields.Color}</li>
    <li>Price: {data.fields.Price}</li>
    <li>Description: {data.fields.Description}</li>
  </div>
  );
}

export default OderList;
