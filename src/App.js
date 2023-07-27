import React from "react";

import Header from './Header';
import Content from './Content';
import Card from './Card';

/*
  React Component Guide - Creating and using

  - Must import React from "react";
  - function returning a JSX
    - Must have a parent element
    - React Fragment (empty tag opening and closing)
  - Export a function
  - To use a component:
    - Import
    - Use as a tag, ex: <App />
  - Components can recieve properties, ex: <Header title="Hello, world" />
*/

function App() {
  return (
    <>
      <Header title="hello, world" subtitle="Other text" />
      <Content title="Titulo da requisição do body do header e do for each">
        <p>
          lorem impsum dolor sit amet mohammed mustafa mr anconi mr blini mr antunes mr lima de purtugal falai guilzzzzzzzzzzzzzzzzzzzzzzzz
        </p>
        <p>
          lorem impsum dolor sit amet mohammed mustafa mr anconi mr blini mr antunes mr lima de purtugal falai guilzzzzzzzzzzzzzzzzzzzzzzzz
        </p>
        <p>
          lorem impsum dolor sit amet mohammed mustafa mr anconi mr blini mr antunes mr lima de purtugal falai guilzzzzzzzzzzzzzzzzzzzzzzzz
        </p>
        <Card />
      </Content>
    </>
  );
}

export default App;
