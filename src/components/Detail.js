import React, { Component } from "react";
import firebase from "firebase";
import "firebase/storage";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [],
        displayAdd:false,
        showNumber:1,
        show:true
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
    
    changeShowNumber(num){
        this.setState({showNumber:num});
    }

    getName(num){
        let result = [];
            if (this.state.data == null || this.state.data.length == 0) {
                return [
                <tr key="0">
                    <th>NO DATA</th>
                </tr>
                ];
            }
        
        result.push(
            <h1>{this.state.data[num].name}</h1>
        );
        return result;
    }

    // データ表示の生成
    displayDetail(num) {
            let result = [];
            if (this.state.data == null || this.state.data.length == 0) {
                return [
                <tr key="0">
                    <th>NO DATA</th>
                </tr>
                ];
            }
    
        result.push(
            <tr key={num}>
            <td className="btn routine">{this.state.data[num].name}</td>
            <td className="skillpoint">+{this.state.data[num].skillPoint.HP}</td>
            <td className="skillpoint">+{this.state.data[num].skillPoint.MP}</td>
            <td className="skillpoint">+{this.state.data[num].skillPoint.knowledge}</td>
            <td className="skillpoint">+{this.state.data[num].skillPoint.experiment}</td>
            <td className="skillpoint">+{this.state.data[num].skillPoint.skill}</td>
            </tr>
        );
        
    return result;
  }
  getDetail(){
      return(
        <div>
            <div>{this.getName(1)}</div>
            <h2>skill point</h2>

        <table class="table list">
        <thead class="thead-light">
        <tr>
            <th scope="col">name</th>
            <th scope="col">HP</th>
            <th scope="col">MP</th>
            <th scope="col">knowledge</th>
            <th scope="col">experiment</th>
            <th scope="col">Skill</th>
        </tr>
        </thead>
    
        <tbody>{this.displayDetail(1)}</tbody>
    
        </table>
    </div>
    );
  　}

  　render() {
    
    if (this.state.data.length == 0) {
        this.getFireData();
    }
    //選択したものだけを表示したい
    let item=[];
    if(this.state.show){
        item.push(this.getDetail());
    }

    return (
        item
    );
   }
}

export default Detail;