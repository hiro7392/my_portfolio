import React, { Component } from "react";
import firebase from "firebase";
import "firebase/storage";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';


class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name_str: "",
      HP_value:0,
      MP_value:0,
      experiment_value:0,
      skill_value:0,
      knowledge_value:0,
      lastID: 0,
      data: []
    };
    this.getLastID();
    this.doChangeName = this.doChangeName.bind(this);
    this.doChangeHP = this.doChangeHP.bind(this);
    this.doChangeMP = this.doChangeMP.bind(this);
    this.doChangeKnowledge = this.doChangeKnowledge.bind(this);
    this.doChangeExperiment = this.doChangeExperiment.bind(this);
    this.doChangeSkill = this.doChangeSkill.bind(this);

    this.doAction = this.doAction.bind(this);
  }

  doChangeName(e) {
    this.setState({
      name_str: e.target.value
    });
  }
  doChangeHP(e) {
    this.setState({
      HP_value: e.target.value
    });
  }
  doChangeMP(e) {
    this.setState({
      MP_value: e.target.value
    });
  }
  doChangeKnowledge(e) {
    this.setState({
      knowledge_value: e.target.value
    });
  }
  doChangeExperiment(e) {
    this.setState({
      experiment_value: e.target.value
    });
  }
  doChangeSkill(e) {
    this.setState({
      skill_value: e.target.value
    });
  }

  

  doAction(e) {
    this.addFireData();
  }

  getLastID() {
    let db = firebase.database();
    let ref = db.ref("routines/");
    let self = this;
    ref
      .orderByKey()
      .limitToLast(1)
      .on("value", snapshot => {
        let res = snapshot.val();
        for (let i in res) {
          self.setState({
            lastID: i
          });
          return;
        }
      });
  }

  addFireData() {
    if (this.state.lastID == -1) {

      return;
    }
    let id = this.state.lastID * 1 + 1;
    let db = firebase.database();
    let ref = db.ref("/routines/" + id);
    ref.set({
      id: id,
      count:0,
      streak:0,
      name: this.state.name_str,
      skillPoint:{
        experiment:this.state.experiment_value,
        knowledge:this.state.knowledge_value,
        HP:this.state.HP_value,
        MP:this.state.MP_value,
        skill:this.state.skill_value
      }
    });
  }

  render() {
    if (this.state.lastID == -1) {
      this.getLastID();
    }
    return (
      
        <div>
        <div>
          <h4>追加する習慣名</h4>
        <input
                  type="text"
                  placeholder="name."
                  onChange={this.doChangeName}
                  value={this.state.name_str}
        />
           <table class="table list">
             <thead class="thead-light">
                 <tr>
                     
                     <th scope="col">体力</th>
                     <th scope="col">メンタル</th>
                     <th scope="col">知識</th>
                     <th scope="col">経験値</th>
                     <th scope="col">技術力</th>
                 </tr>
             </thead>
             <tbody>
               
               <td className="cnt">
                  <input className="in"
                  type="value"
                  placeholder="HP"
                  onChange={this.doChangeHP}
                  value={this.state.HP_value}
                  />
               </td>
               <td className="cnt">
                  <input className="in"
                  type="value"
                  placeholder="MP"
                  onChange={this.doChangeMP}
                  value={this.state.MP_value}
                  />
               </td>
               <td className="cnt">
               <input className="in"
                  type="value"
                  placeholder="knowledge"
                  onChange={this.doChangeKnowledge}
                  value={this.state.knowledge_value}
                  />
               </td>
               <td className="cnt">
                  <input className="in"
                  type="value"
                  placeholder="experimence"
                  onChange={this.doChangeExperiment}
                  value={this.state.experiment_value}
                  />
               </td>
               <td className="cnt">
                <input className="in"
                  type="text"
                  placeholder="skill"
                  onChange={this.doChangeSkill}
                  value={this.state.skill_value}
                  />
               </td>
             </tbody>
           </table>
          </div>
    
        <button className="btn sub" onClick={this.doAction}>Add</button>
        </div>
    );
  }
}

export default Add;
