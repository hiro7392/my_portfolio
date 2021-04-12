import React, { Component } from "react";
import firebase from "firebase";
import "firebase/storage";
import Add from "./Add";
import Delete from "./Delete"

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        player:[],
        displayAdd:false,
        displayDetail:0,
        
    };
    this.getFireData();
    
  }

  // Firebaseからのデータ取得
  getFireData() {
    let db = firebase.database();
    let ref = db.ref("routines/");
    let ref2=db.ref("player/");
    let self = this;
    ref
      .orderByKey()
      .limitToFirst(10)
      .on("value", snapshot => {
        self.setState({
          data: snapshot.val()
        });
      });
    ref2
      .orderByKey()
      .on("value", snapshot => {
        self.setState({
          player: snapshot.val()
        });
      });
  }
  showAdd(){
    this.setState({displayAdd:true});
  }
  changeDetail(num){
    this.setState({displayDetail:num});
  }

  increFireData(id) {
    //id=index
    let db = firebase.database();
    //let id=this.state.data[index].id;
    let ref = db.ref(id);
    if (this.state.lastID == -1) {
      return;
    }
    var cnt=this.state.data[id].count;
    cnt=cnt+1
    ref.update({"count":cnt});
    let p=db.ref("player/");
    p.update({"HP":(this.state.player.HP+this.state.data[id].skillPoint.HP)});
    p.update({"MP":this.state.player.MP+this.state.data[id].skillPoint.MP});
    p.update({"skill":this.state.player.skill+this.state.data[id].skillPoint.skill});
    p.update({"knowledge":this.state.player.knowledge+this.state.data[id].skillPoint.knowledge});
    p.update({"experiment":this.state.player.experiment+this.state.data[id].skillPoint.experiment});



  }


  // データ表示の生成
  getTableData() {
    let result = [];
    
    if (this.state.data == null || this.state.data.length == 0) {
      return [
        <tr key="0">
            <th>NO DATA</th>
        </tr>
      ];
    }
    
    for (let i in this.state.data) {
      let del=<Delete/>;
      let ID=this.state.data[i].id;
      
      //del.setNum(this.state.data[i].id);
      result.push(
        
        <tr key={i}>
          <td className="btn routine" onClick={()=>{this.increFireData(i)}}>{this.state.data[i].name}</td>
          <td className="cnt">{this.state.data[i].count}</td>
          <td className="cnt">{this.state.data[i].streak}</td>
          <td className="btn routine">{del}</td>
        </tr>
      );
    }
    return result;
  }

  render() {
    
    
    let create=<Add/>;
    if (this.state.data.length == -1) {
        this.getFireData();
    }
    return (
        <div>
        <table class="table list">
        <thead class="thead-light">
            <tr>
                <th scope="col">name</th>
                <th scope="col">count</th>
                <th scope="col">streak</th>
                <th scope="col">delete</th>
            </tr>
        </thead>
        <tbody>{this.getTableData()}</tbody>
        
        </table>
        <button onClick={()=>{this.showAdd()}} className="btn products">Create</button>
        <div style={{display:this.state.displayAdd ? '' : 'none' }}>{create}</div>
        
        

        </div>
    );
  }
}

export default List;