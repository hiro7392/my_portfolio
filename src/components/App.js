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
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons"; 
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab,fas);
class App extends React.Component{
    
    constructor(props) {
      super(props);
      // stateを定義してください
      this.state={openNumber:0};

    }
      clickProfile(){
        this.setState({openNumber:0});
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
      



      return (
      <div className="main">
        <div className="headlinks">
          <button onClick={()=>{this.clickProfile()}} className="btn about">Home</button>
          <button onClick={()=>{this.clickSkills()}}  className="btn Skills">Skills</button>
          <button onClick={()=>{this.clickProducts()}} className="btn products">About</button>
        </div>
        <div className="contents">

          
          <div style={{display:this.state.openNumber!==1 ? 'none' : '' }}>{skill}</div>
          <div style={{display:this.state.openNumber!==2 ? 'none' : '' }}>{about}</div>
          <div style={{display:this.state.openNumber!==0 ? 'none' : '' }}>{home}</div>
          <div style={{display:this.state.openNumber!==0 ? 'none' : '' }}>{skill}</div>
          <div style={{display:this.state.openNumber!==0 ? 'none' : '' }}>{about}</div>
          
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
