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
          <div>{home}</div>
          <div style={{display:this.state.openNumber!==0 ? 'none' : '' }}>{skill}</div>
          <div style={{display:this.state.openNumber!==0 ? 'none' : '' }}>{about}</div>
          
        </div>
            <div className="links">
            <button className="btn github links">Github</button>
            <button className="btn twitter links" onClick={()=>{this.moveToLink("https://twitter.com/fish0504_")}}>Twitter</button>
            <button className="btn HatenaBlog links" Link="https://atcoder.jp/users/fish0504_">Hatena Blog</button>
            <button className="btn AtCoder links"><span class="fas fa-at"></span>AtCoder</button>
            </div>
      </div>

    );
  }

}
//
//<Link to="https://twitter.com/fish0504_"><button className="btn twitter links">Twitter</button></Link>
export default App;
