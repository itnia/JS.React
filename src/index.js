import React from 'react';
import ReactDOM from 'react-dom';
//import { Router } from 'react-router';
//import {} from  '';
import './style.css';
import { data } from './data.js';

//-------------------------------------------  cd my-app     npm start

const NewTitle = (props) => {
  const { data } = props;
  return (
    <>
      <p>
        {data.title}
      </p>
      <p>
        {data.text}
      </p>
    </>
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
    <>
      <p>
        {data.title}
      </p>
      <p>
        {data.text}
      </p>
      <a onClick={this.handleReadMoreClck} href="#" className='news__readmore'>Подробнее</a>
    </>
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

  clickTitle = (a) => {
    this.setState({ isTitle: true })
    this.setState({ idTitle: a })
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
  
ReactDOM.render(
  <App  data = {data}/>,
  document.getElementById('root')
);