import {Header, Footer, Possibility, WhatGPT3, Blog, Features} from './containers';
import {Cta, Navbar, Brand} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
