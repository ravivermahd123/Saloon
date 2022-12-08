
import React from 'react'
import Footer from './Component/Footer';
import Header from './Component/Header';
import RoutesFolder from './routes';


function App() {
  return (
    <div className="App">
      <Header/>
        <RoutesFolder/>
      
      <Footer/>
    </div>
  );
}

export default App;
