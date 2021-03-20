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
      msg_str: "",
      lastID: -1,
      data: []
    };
    this.getLastID();
    this.doChangeName = this.doChangeName.bind(this);
    this.doChangeMsg = this.doChangeMsg.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChangeName(e) {
    this.setState({
      name_str: e.target.value
    });
  }

  doChangeMsg(e) {
    this.setState({
      msg_str: e.target.value
    });
  }

  doAction(e) {
    this.addFireData();
  }

  getLastID() {
    let db = firebase.database();
    let ref = db.ref("sample/");
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
    let ref = db.ref("/sample/" + id);
    ref.set({
      ID: id,
      count:0,
      streak:0,
      name: this.state.name_str
    });
  }

  render() {
    if (this.state.lastID == -1) {
      this.getLastID();
    }
    return (
      <div>
        <input
          type="text"
          placeholder="name."
          onChange={this.doChangeName}
          value={this.state.name_str}
        />
        {/* <input
          type="text"
          placeholder="type message"
          onChange={this.doChangeMsg}
          value={this.state.msg_str}
        /> */}
        <button className="sub" onClick={this.doAction}>Add</button>
      </div>
    );
  }
}

export default Add;
