"use client";

import React from 'react';
import Form from './main.jsx';


function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

  
function HtmlStructure() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React</title>
      </head>
      <body>
        <header></header>
        <main>
          <App />
        </main>
        <footer></footer>
      </body>
    </html>
  );
}


export default HtmlStructure;