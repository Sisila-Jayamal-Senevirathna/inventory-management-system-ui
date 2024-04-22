// import Home from './Components/Home';

// function App() {  
  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className ='responsive'>          
//           <Home/>             
//         </div>                   
//       </header>    
//     </div>    
//   );
// }
// export default App;

import React from "react"; 
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Home from './Components/Home';
import CoralList from './Pages/CoralList';
import TaskMapping from './Pages/TankMapping';


function App() {

  return (

    <div className="App">
      <header className="App-header">
        <div className='responsive'>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/CoralList" element={<CoralList />} />
              <Route path="/TankMapping" element={<TaskMapping />} />
            </Routes>            
          </Router>
        </div>
      </header>
    </div>



  );
}
export default App;
