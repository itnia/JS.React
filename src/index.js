import React from 'react';
import ReactDOM from 'react-dom';
//import { Router } from 'react-router';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
//import {} from  '';
import './style.css';
import { data } from './data.js';

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

//-------------------------------------------

class Article extends React.Component {

  handleReadMoreClck = (e) => {
    e.preventDefault()
    this.props.clickTitle(this.props.data.id)
  }

  render(){
  const { data } = this.props;
  return (
    <div className="article">
      <p>
        {data.title}
      </p>
      <p>
        {data.text}
      </p>
      <a onClick={this.handleReadMoreClck} href="#aaa" className='news__readmore'>Подробнее</a>
    </div>
  )
    }
}

//-------------------------------------------

const NewsGroup = (props) => {
  const { data } = props;
  let newsTemplate = null;

  if( data.length ){
    newsTemplate = data.map(function(item) {
      return <Article key={item.id} data={item} clickTitle={props.clickTitle}/>
    })
  } else {
    newsTemplate = <p>К сожалению новостей нет</p>
  }

  return  newsTemplate;
}

//-------------------------------------------

class App extends React.Component {
  state = {
    idTitle: 0,
    isTitle: false
  }

  clickExit = (e) => {
    e.preventDefault()
    this.setState({ isTitle: false })
  }

  clickTitle = (e) => {
    this.setState({ isTitle: true })
    this.setState({ idTitle: e })
  }

  render () {

    if(!this.state.isTitle){
      return (
        <>
        <NewsGroup data = {this.props.data} clickTitle = {this.clickTitle}/>
        </>
      )
    } else {
      return (
        <>
        <button onClick = {this.clickExit}>Exit</button>
        <NewTitle data = {this.props.data[this.state.idTitle]}/>
        </>
      )
    }     
  }
}

//-------------------------------------------

const initialState = {
  user: 'Unknown User',
}
function rootReducer(state = initialState) {
  return state
}
const store = createStore(rootReducer, initialState)

//-------------------------------------------
  
ReactDOM.render(
  <Provider store={store}>
  <App data = {data}/>
  </Provider>,
  document.getElementById('root')
);