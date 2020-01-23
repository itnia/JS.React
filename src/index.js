import React from 'react';
import ReactDOM from 'react-dom';
//import { Router } from 'react-router';
import { createStore } from 'redux'
//import { Provider } from 'react-redux'
import './style.css';
import { data } from './data.js';
import { reducer } from './reducer';

//-------------------------------------------  cd my-app     npm start

const NewTitle = (props) => {
  const { data } = props;
  return (
    <div className="article">
      <p>
        {data.title}
      </p>
      <p>
        {data.text}
      </p>
    </div>
  )
}

const Article = (props) => {

  const clickTitle = () => {
    store.dispatch(isTitle(true))
    store.dispatch(idTitle(props.data.id))
  }

  const { data } = props;
  return (
    <div className="article">
      <p>
        {data.title}
      </p>
      <p>
        {data.text}
      </p>
      <a onClick={clickTitle} href="#aaa" className='news__readmore'>Подробнее</a>
    </div>
  )
}

const NewsGroup = (props) => {
  const { data } = props;
  let newsTemplate = null;

  if( data.length ){
    newsTemplate = data.map(function(item) {
      return <Article key={item.id} data={item}/>
    })
  } else {
    newsTemplate = <p>К сожалению новостей нет</p>
  }

  return  newsTemplate;
}

class App extends React.Component {

  componentDidMount(){
    store.subscribe(() => this.forceUpdate());
  }

  clickExit = () => {
    store.dispatch(isTitle(false))
  }

  render () {
    if( !store.getState().isTitle ){
      return (
        <>
        <NewsGroup data = {this.props.data}/>
        </>
      )
    } else {
      return (
        <>
        <button onClick = {this.clickExit}>Exit</button>
        <NewTitle data = {this.props.data[store.getState().idTitle]}/>
        </>
      )
    }     
  }
}

//-------------------------------------------

const initialState = {
  idTitle: 0,
  isTitle: false
};

const store = createStore(reducer, initialState);

const isTitle = (isTitle) => ({type: 'IS_TITLE', isTitle});
const idTitle = (idTitle) => ({type: 'ID_TITLE', idTitle});

//-------------------------------------------
  
ReactDOM.render(
  <App data = {data}/>,
  document.getElementById('root')
);