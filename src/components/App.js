

import React from 'react';

//import { withRouter } from 'react-router';
//import { Link } from "react-router-dom";
import Contentbox from './Contentbox';
//import {View } from 'react-native';
//import { Ionicons, FontAwesome } from "@expo/vector-icons";
//import Icon from 'react-native-vector-icons/FontAwesome';
import Profile from './Profile';
import Skills from './Skills';
import Products from './Products';
import List from "./List";
//import InputForm from './Firebase';
import GradeRader from './Rader';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons"; 
import { library } from '@fortawesome/fontawesome-svg-core';
//import firebase from "firebase/app";
import firebase from "firebase";
library.add(fab,fas);


const firebaseConfig = {
  apiKey: "AIzaSyCVS5WF9IpxzedQ8bQcnxOTq9IRKJ3PhZE",
  authDomain: "routine-react-app.firebaseapp.com",
  databaseURL: "https://routine-react-app-default-rtdb.firebaseio.com",
  projectId: "routine-react-app",
  storageBucket: "routine-react-app.appspot.com",
  messagingSenderId: "232980496591",
  appId: "1:232980496591:web:b719b34a9c15f34a3d37ba"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




class App extends React.Component{
    constructor(props) {
      super(props);
      // stateを定義してください
      this.state={openNumber:0};
    }
      
      
      
      clickProfile(){
        this.setState({openNumber:0});
        //this.getUserId("sakana")
      }
      clickSkills(){
        this.setState({openNumber:1});
      }
      clickProducts(){
        this.setState({openNumber:2});
      }

      moveToLink(url){
        this.props.history.push(url);
      }

      
    
    render()
    {
      let home=<Profile/>;
      let skill=<Skills/>;
      let about=<Products/>;
      let lader=<GradeRader/>;
      let list=<list/>;

      return (
        
      <div className="main">
        <div className="headlinks">
          <button onClick={()=>{this.clickProfile()}} className="btn about">Home</button>
          <button onClick={()=>{this.clickSkills()}}  className="btn Skills">List</button>
          <button onClick={()=>{this.clickProducts()}} className="btn products">Chart</button>
        </div>
        <div className="contents">

          
          
        <div>{list}</div>
          <div style={{display:this.state.openNumber!==0 ? 'none' : '' }}>{home}</div>
          
          
          <div style={{display:this.state.openNumber!==0 ? 'none' : '' }}>{lader}</div>
          {about}
        </div>
        <BrowserRouter>
            <div className="links">            
            <a className="btn github links" href="https://github.com/fish0504"><FontAwesomeIcon icon={['fab','github']}/></a>
            <a className="btn twitter links" href="https://twitter.com/fish0504_"><FontAwesomeIcon icon={['fab','twitter']}/></a>
            <a className="btn AtCoder links" href="https://atcoder.jp/users/fish0504"><FontAwesomeIcon icon={['fas','chess-knight']}/></a>
            </div>
        </BrowserRouter>
      </div>
      
      
    
  
    );
  }

}
//
//<Link to="https://twitter.com/fish0504_"><button className="btn twitter links">Twitter</button></Link>
export default App;
