import React from "react";
import GroceryRow from "./GroceryRow";
// import GroceryTableTotal from './GroceryTableTotal';

function GroceryTable({ items, quantity}) {
    return (
        <table id="grocerylist">
            <caption> Items for sale</caption>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Choose Quantity</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => <GroceryRow item={item} key={i} />)}
            </tbody>
            {/* <tfoot>
                <GroceryTableTotal items={items} />
            </tfoot> */}
        </table>    
    );
}

export default GroceryTable;