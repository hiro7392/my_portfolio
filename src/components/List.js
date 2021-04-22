import React, { Component } from "react";
import firebase from "firebase";
import "firebase/storage";
import Add from "./Add";


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        player:[],
        displayAdd:false,
        displayDetail:0,
        displayCreate:true,
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
    this.setState({displayCreate:false});
  }
  changeDetail(num){
    this.setState({displayDetail:num});
  }
  //iは配列のインデックス
  increFireData(i) {
    //id=index
    let db = firebase.database();
    
    var ID=this.state.data[i].id;    //習慣[i]のID
    let ref = db.ref("routines/"+ID);
    if (this.state.lastID == -1) {
      return;
    }
    var cnt=this.state.data[i].count;
    cnt=cnt+1
    ref.update({"count":cnt});
    let p=db.ref("player/");
    p.update({"HP":(this.state.player.HP+this.state.data[i].skillPoint.HP)});
    p.update({"MP":this.state.player.MP+this.state.data[i].skillPoint.MP});
    p.update({"skill":this.state.player.skill+this.state.data[i].skillPoint.skill});
    p.update({"knowledge":this.state.player.knowledge+this.state.data[i].skillPoint.knowledge});
    p.update({"experiment":this.state.player.experiment+this.state.data[i].skillPoint.experiment});

  }
  deleteFireData(i) {
    alert('本当に消去しますか?')
    var id=this.state.data[i].id;
    let db = firebase.database();
    let ref = db.ref("routines/" + id);
    ref.remove();
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
      
      let ID=this.state.data[i].id;
      
      //del.setNum(this.state.data[i].id);
      result.push(
        
        <tr key={i}>
          <td className="btn routine" onClick={()=>{this.increFireData(i)}}>{this.state.data[i].name}</td>
          <td className="cnt">{this.state.data[i].count}</td>
          <td className="btn delete" onClick={()=>{this.deleteFireData(i)}}>消去</td>
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
        <h1 className="routine_all">続けたい習慣</h1>
        <table class="table list">
        <thead class="thead-light">
            <tr>
                <th scope="col">name</th>
                <th scope="col">count</th>
                <th scope="col">delete</th>
            </tr>
        </thead>
        <tbody>{this.getTableData()}</tbody>
        
        </table>
        <button onClick={()=>{this.showAdd()}} className="btn products"
        style={{display:this.state.displayCreate ? '' : 'none' }} >新規</button>
        <div style={{display:this.state.displayAdd ? '' : 'none' }}>{create}</div>
        
        

        </div>
    );
  }
}

export default List;