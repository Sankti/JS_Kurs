import React from 'react';
import './App.css';

import Article from './components/Blog_Article';
import MasterBlog from './components/Blog_Master';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MasterBlog
        img1="https://pofo.b-cdn.net/wp-content/uploads/2017/08/blog-img37.jpg.webp"
        title1="New Vaccine"
        text1="Impossible discovery in Pcim, Lesser Poland. Nation-wide strikes as president declares mandatory vaccination."
        img2="https://pofo.b-cdn.net/wp-content/uploads/2017/08/blog-img54.jpg.webp"
        title2="Coffe Magnet"
        text2="New electronical device will always keep you supplied with best blends of coffe from Bolivia." />
      </header>
    </div>
  );
}

export default App;