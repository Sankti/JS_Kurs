import React from 'react';
import './App.css';

import Article from './components/BlogArticle';
import NavBar from "./components/BlogNav";
import Sidebar from "./components/BlogSidebar"



function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="container">

          <NavBar />
          
          <div className="container-rows">
            <div className="container">

                <Article img="https://pofo.b-cdn.net/wp-content/uploads/2017/08/blog-img37.jpg.webp" title="New Vaccine" text="Impossible discovery in Pcim, Lesser Poland. Nation-wide strikes as president declares mandatory vaccination." />
                <Article img="https://pofo.b-cdn.net/wp-content/uploads/2017/08/blog-img54.jpg.webp" title="Coffe Magnet" text="New electronical device will always keep you supplied with best blends of coffe from Bolivia." />

            </div>
            <Sidebar />
          </div>

        </div>

      </header>
    </div>
  );
}

export default App;