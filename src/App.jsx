import './App.scss';

import Footer from './components/Footer';
import Conversion from './components/Conversion';

function App() {
    return (
        <div className="App">
            <h1>Convert<span>2</span>bases</h1>
            <Conversion />
            <Footer />
        </div>
    );
}

export default App;
