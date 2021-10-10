import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route} from "react-router-dom";
import Homepage from './components/homepage';


const App = () => {
    return (
        <BrowserRouter>
          <Route path="/" exact><Homepage/></Route>
        </BrowserRouter>
      );
}

export default App;

