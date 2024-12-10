import React from 'react';

export default function Button() {
    return (
        <ul>
            <li>
                <input type="checkbox" />
                <button type='button'>-</button>
                <span>1</span>
                <button type='button'>+</button>
            </li>
            <li><button type="button">카트에 넣기</button></li>
            <li><button type="button">바로구매</button></li>
            <li><button type="button">리스트에 넣기</button></li>
        </ul>
    );
}