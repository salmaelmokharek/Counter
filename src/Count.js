import React , { useState }  from 'react';
import './Count.css';


const Counter = () => {
    const [number, setNumber] = useState(0);

    const decrementNumber = () => {
        setNumber(prevNumber => prevNumber - 1);
    };
    
    const incrementNumber = () => {
      setNumber(prevNumber => prevNumber + 1);
    };

    let numberColor = 'black';
    if (number > 0) {
      numberColor = 'blue';
    } else if (number < 0) {
      numberColor = 'red';
    }

    return (
        <div>
            <h1>Counter</h1>
            <h2 style={{color:numberColor}}>{number}</h2>
            <button onClick={decrementNumber} className='decbtn'>-</button>
            <button onClick={incrementNumber} className='incbtn'>+</button>
        </div>
    );
};

export default Counter