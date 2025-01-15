import React from 'react';

export default function Carts({cartList}) {
    return (
        <div>
            <h1>Carts</h1>
            <table border='1'>
                <tr>
                    <th>pid</th>
                    <th>size</th>
                    <th>qty</th>
                    <th>price</th>
                </tr>
                { cartList.map((cartItem) => 
                    <tr>
                        <td>{cartItem.pid}</td>
                        <td>{cartItem.size}</td>
                        <td>{cartItem.qty}</td>
                        <td>{cartItem.price}</td>
                    </tr>
                ) }
            </table>
        </div>
    );
}