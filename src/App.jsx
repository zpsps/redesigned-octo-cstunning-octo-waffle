import { useState } from 'react'
import './App.css'
import Furmm from './form/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
       <Furmm />
     </div>
    </>
  )
}

export default App;

// import './App.css';
// import Formm from './Form/form';

// function App() {
//   return (
//     <div className="App">
//       <Formm />
//     </div>
//   );
// };

// export default App;
