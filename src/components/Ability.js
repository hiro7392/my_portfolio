    //表示させたいデータ群
     //表示させたいデータ群
     import {PolarGrid,Tooltip,RadarChart,PolarAngleAxis,Radar} from 'recharts'
     import React,{Component} from 'react';
     import firebase from "firebase";
     import "firebase/storage";
     class Ability extends Component{
     //const GradeRader=()=>{
       
       constructor(props) {
         super(props);
         this.state = {
             player:[],
         };
         this.getFireData();
         
       }
     
       // Firebaseからのデータ取得
       getFireData(){
         let db = firebase.database();
         
         let ref2=db.ref("player/");
         let self = this;
         ref2
           .orderByKey()
           .on("value", snapshot => {
             self.setState({
               player: snapshot.val()
             });
           });
         }
           
       render(){
           var dataRadar = [
             { rank: 'knowledge', value: this.state.player.knowledge },
             { rank: 'experiment', value: this.state.player.experiment },
             { rank: 'skill', value: this.state.player.skill },
             { rank: 'HP', value: this.state.player.HP },
             { rank: 'MP', value: this.state.player.MP }
             ];
         
         return(
          
           <div>
           <table class="table list">
             <thead class="thead-light">
                 <tr>
                     <th scope="col">HP</th>
                     <th scope="col">MP</th>
                     <th scope="col">knowledge</th>
                     <th scope="col">experiment</th>
                     <th scope="col">skill</th>
                 </tr>
             </thead>
             <tbody>
               <td className="cnt">{this.state.player.HP}</td>
               <td className="cnt">{this.state.player.MP}</td>
               <td className="cnt">{this.state.player.knowledge}</td>
               <td className="cnt">{this.state.player.experiment}</td>
               <td className="cnt">{this.state.player.skill}</td>
             </tbody>
           </table>
           </div>
         );
       }
     }
     
     export default Ability;