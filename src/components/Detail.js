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
    let ref = db.ref("routines/");
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
            <td className="skillpoint">+{this.state.data[num].skillPoint.HP}</td>
            <td className="skillpoint">+{this.state.data[num].skillPoint.MP}</td>
            <td className="skillpoint">+{this.state.data[num].skillPoint.knowledge}</td>
            <td className="skillpoint">+{this.state.data[num].skillPoint.experiment}</td>
            <td className="skillpoint">+{this.state.data[num].skillPoint.skill}</td>
            </tr>
        );
        
    return result;
  }
  getDetail(num){
      return(
        <div>
            <div>{this.getName(num)}</div>
            <h1 className="skillPoint">skill point</h1>

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
    
        <tbody>{this.displayDetail(num)}</tbody>
    
        </table>
    </div>
    );
  　}

  　render() {
    
    // if (this.state.data.length == 0) {
    //     this.getFireData();
    // }
    //選択したものだけを表示したい
    let item=[];
    if(this.state.show){
        for (let i in this.state.data){
        item.push(this.getDetail(i));
        }
    }

    return (
        item
    );
   }
}

export default Detail;