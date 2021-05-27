import React from 'react';
import './App.scss';
import {AddColor} from "./components/add-color/AddColor";
import {Search} from "./components/search/Search";
import {Box} from "./components/box/Box";

const App = () => {
  return (
      <div className="App">
          <div>
              <AddColor />
          </div>
          <hr/>
          <div>
              <Search />
          </div>
          <hr/>
          <div>
              <Box />
          </div>
      </div>
  );
}

export default App;
