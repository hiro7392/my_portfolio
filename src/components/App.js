

import React from 'react';

//import { withRouter } from 'react-router';
//import { Link } from "react-router-dom";
//import Contentbox from './Contentbox';
//import {View } from 'react-native';
//import { Ionicons, FontAwesome } from "@expo/vector-icons";
//import Icon from 'react-native-vector-icons/FontAwesome';
import Profile from './Profile';
import Products from './Products';
import List from "./List";
import Add from "./Add";
import Detail from "./Detail"
import Ability from "./Ability"
//import Dropd from "./part/Dropd"
//import App2 from "./auth/App2"
//import InputForm from './Firebase';
import GradeRader from './Rader'; //レーダーチャート用
import { fab } from '@fortawesome/free-brands-svg-icons';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      this.state={openNumber:0,
                  showProfile:false
      };
    }
      
      
      
      clickProfile(){
        this.setState({openNumber:0});
        this.setState({showProfile:false});
        //this.getUserId("sakana")
      }
      clickSkills(){
        this.setState({openNumber:1});
        this.setState({showProfile:false});
      }
      clickChart(){
        this.setState({openNumber:2});
        this.setState({showProfile:false});
      }

      moveToLink(url){
        this.props.history.push(url);
      }
      switchProfile(){
        if(this.showProfile){
          this.setState({showProfile:false});
        }
        else{
          this.setState({showProfile:true});        
        }
      }

      
    
    render()
    {
      let home=<Profile/>;
      let about=<Products/>;
      let lader=<GradeRader/>;
      let list=<List/>;
      let add=<Add/>;
      let detail=<Detail/>;
      let ability=<Ability/>;
      //let app2=<App2/>;
      return (
        
      <div className="main">
        <div className="headlinks">
          <button onClick={()=>{this.clickProfile()}} className="btn about">Home</button>
          <button onClick={()=>{this.clickSkills()}}  className="btn Skills">List</button>
          <button onClick={()=>{this.clickChart()}} className="btn products">Chart</button>
        </div>
        <div className="contents">

          
          
          
          <div style={{display:this.state.openNumber!==0 ? 'none' : '' }}>{home}</div>
          
          
          <div style={{display:this.state.openNumber!==2 ? 'none' : '' }}>{lader}</div>
          <div style={{display:this.state.openNumber !==2 ? 'none' : '' }}>{ability}</div>

          
          <div style={{display:this.state.openNumber!==1 ? 'none' : '' }}>{list}</div>
          <div style={{display:this.state.openNumber!==1 ? 'none' : '' }}>{detail}</div>
          <div style={{display:this.state.openNumber!==1 ? 'none' : '' }}>{lader}</div>
          <div style={{display:this.state.openNumber !==1 ? 'none' : '' }}>{ability}</div>
          
          <div style={{display:this.state.openNumber!==5 ? 'none' : '' }}>{add}</div>
          <div style={{display:this.state.openNumber !==2 ? 'none' : '' }}>{lader}</div>
          <div style={{display:this.state.openNumber !==2 ? 'none' : '' }}>{ability}</div>

          
        </div>
        <button onClick={()=>{this.switchProfile()}} className="btn owner"
        style={{display:this.state.showProfile ? 'none' : '' }}>show</button>

        <div style={{display:this.state.showProfile ? '' : 'none' }}>{about}</div>

        <button onClick={()=>{this.switchProfile()}} className="btn owner" 
        style={{display:this.state.showProfile ? '' : 'none' }}>hide</button>
      </div>
      
      
    
  
    );
  }

}
// <div style={{display:this.state.openNumber!==1 ? 'none' : '' }}>{list}</div>
//
//<Link to="https://twitter.com/fish0504_"><button className="btn twitter links">Twitter</button></Link>
export default App;
