import { useEffect, useState } from 'react';
import Button from './Button.jsx'
import ButtonList from './ButtonList.jsx';

export default function AppButton() {
    const [buttonList, setButtonList] = useState([]);
    
    useEffect(() => {
        fetch('/data/buttons.json')
            .then((result) => result.json())
            .then((jsonData) => setButtonList(jsonData))
            .catch((error) => console.log(error));
    }, []);

    // const buttonList = [
    //     { 'type': 'button', 'name': 'All'},
    //     { 'type': 'button', 'name': 'Front-end'},
    //     { 'type': 'button', 'name': 'Back-end'},
    //     { 'type': 'button', 'name': 'Mobile'},
    //     { 'type': 'submit', 'name': 'Submit'},
    //     { 'type': 'reset', 'name': 'Reset' }
    // ];
    return (    
        <>
            <div className='app-button'>
                <Button type='button' name='All' />
                <Button type='button' name='Front-end' />
                <Button type='button' name='Back-end' />
                <Button type='button' name='Mobile' />
                <Button type='submit' name='Submit' />
                <Button type='reset' name='Reset' />
            </div>
            <div className='app-button'>
                <ButtonList list={buttonList} />
            </div>
        </>
    );
}