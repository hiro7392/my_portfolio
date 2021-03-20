import React, { Component } from "react";
import firebase from "firebase";
import "firebase/storage";
import Add from "./Add";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        displayAdd:false
    };
    this.getFireData();
  }

  // Firebaseからのデータ取得
  getFireData() {
    let db = firebase.database();
    let ref = db.ref("sample/");
    let self = this;
    ref
      .orderByKey()
      .limitToFirst(10)
      .on("value", snapshot => {
        self.setState({
          data: snapshot.val()
        });
      });
  }
  showAdd(){
    this.setState({displayAdd:true});
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
      result.push(
        
        <tr key={i}>
          <td className="btn routine">{this.state.data[i].name}</td>
          <td>{this.state.data[i].count}</td>
          <td>{this.state.data[i].streak}</td>
        </tr>
      );
    }
    return result;
  }

  render() {
    let create=<Add/>;
    if (this.state.data.length == 0) {
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