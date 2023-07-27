import React from "react";

import Header from './Header';
import Content from './Content';
import Card from './Card';
import Cards from './Cards';

// importing an image get it's path and save it.
import image1 from './img/image2.png';
import next from './img/nextjs.png';
import vercel from './img/vercel.png';

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
        <Cards>
        <Card
          image={image1}
          title='React Programs'
          text='Ben cê não vai querer comprar briga com Vilgax. Como sabe o nome dele me explica isso vô Max'
          />
        <Card
          image={vercel}
          title='React Native'
          text='A arma mais poderosa do universo inteiro noo pulso de um muleque. Mas eu voltarei, eu prometo'
        />
        <Card
          image={next}
          title='React Sound Distribution'
          text='Quer poder de fogo? Me chama. Farejo o medo, ou até na agua. Acelerei, rapido! Ta querendo uma mão ai?'
        />
        </Cards>
      </Content>
    </>
  );
}

export default App;
