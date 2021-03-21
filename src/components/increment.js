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
    incrementCount(num) {
    let result = [];
    if (this.state.data == null || this.state.data.length == 0) {
      return [
        <tr key="0">
            <th>NO DATA</th>
        </tr>
      ];
    }
    let ref = db.ref("sample/");
    let nowData=ref.equalTo({"id":num});
    result.push(<div>
        <h1>nowData.name</h1>);
    
        result.push(
        <tr>
            <td className="btn routine">{nowData.name}</td>
            <td>{nowData.count}</td>
            <td>{nowData.streak}</td>
        </tr>
        </div>
      );
    //}
    return result;
  }

  render() {
    
    if (this.state.data.length == 0) {
        this.getFireData();
    }
    return (
        <div>{this.incrementCount(2)}</div>
        
    );
   }
}

export default ;