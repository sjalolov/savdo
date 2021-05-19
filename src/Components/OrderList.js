import React from 'react';
import '../css/orderlist.css'

function OderList(){
  return(
<div className="register">
  <div className="left-side">
    <div className="order-window">
      <table>
        <tbody>
          <tr>
            <td>Number</td>
            <td>Item</td>
            <td>SKUnumber</td>
            <td>Description</td>
            <td>Price</td>
            <td>In Stock</td>
          </tr>
        </tbody>
      </table>
    </div>
   </div>
</div>);
}

export default OderList;
