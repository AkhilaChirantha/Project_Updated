

import './App.css';
import ResponsiveAppBar from './component/CustomeAppBar';

import { CreateRouter } from './router/Route';


function App() {
  return (
    <>
    
    <CreateRouter>
    
        <ResponsiveAppBar/>
    </CreateRouter>
    </>
  );
}

export default App;
