import React from 'react';
import GroceryTable from '../components/GroceryTable';

function OrderPage({ items }) {
    return (
        <>
            <h2>Items in Stock</h2>
            <p>Enter quantity of each item would you like to purchase. Use the plus and minus buttons to add or remove items from your cart.</p>
            <GroceryTable items={items}/>
        </>
    );
}

export default OrderPage;