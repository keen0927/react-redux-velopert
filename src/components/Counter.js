import React from 'react';
import './Counter.css';

const Counter = ({ number, color, onIncrement, onDecrement, onSetColor}) => {
    return(
        <div 
            className="Counter" 
            onClick={onIncrement}
            onContextMenu={
                (e) => {
                    e.preventDefault();
                    onDecrement();
                }
            }
            onDoubleClick={onSetColor}
            style={{backgroundColor: color}}>
                {number}
        </div>
    );
};

Counter.defaultProps = {
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')    
}


export default Counter;