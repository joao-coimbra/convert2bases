import './App.scss';

import { useEffect, useState } from 'react';

import Footer from './components/Footer';
import Conversion from './components/Conversion';

function App() {

    const [count, setCount] = useState(0);
    

    useEffect(() => {
        let bases = [2, 8, 10, 16]
        let a = Math.floor(Math.random() * 4)
        setTimeout(() => {
            document.title = 'Convert'+bases[a]+'bases'
            setCount(count+1)
        }, 1000)
    }, [count])

    
    // document.

    return (
        <div className="App">
            <h1>Convert<span>2</span>bases</h1>
            <Conversion />
            <Footer />
        </div>
    );
}

export default App;
