import { useState } from 'react';

function Counterizer(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <p> You clicked how much? How much? {count} times!</p>
            <button onClick={() => setCount(count + 1)}> Go ahead, make ma day!</button>
        </div>
    );
}

export default Counterizer;