import React from 'react';
import ReactDOM from 'react-dom';
//import { Router } from 'react-router';
//import {} from  '';
import './style.css';

//-------------------------------------------  cd my-app     npm start

const News = () => {
  return (
    <>
      <p>Title</p>
      <p>text</p>
    </>
  )
}


class Saite extends React.Component {
  render () {
    return (
      <>
        <h1>NameSaite</h1>
        <News/>
      </>
    )
  }
}
//-------------------------------------------
  
ReactDOM.render(
  <Saite/>,
  document.getElementById('root')
);