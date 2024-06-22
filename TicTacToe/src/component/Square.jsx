// import react from 'react';
// import { useState } from 'react';

const Square = ({value, onSquareClick}) => {

    // const [value, setValue] = useState(null);

    // handleClick function to show that the button was clicked    This function is fet into the onClick function in the button
    // function handleClick() {
    //     return setValue('X');
    // }

    return (
        <>
            <button className="square" onClick={onSquareClick}>
                {value}
            </button>
        </>
    )
}

export default Square