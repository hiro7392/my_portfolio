import React, { Component } from "react";
import firebase from "firebase";
import "firebase/storage";

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_str: "1"
    };
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChange(e) {
    this.setState({
      id_str: e.target.value
    });
  }

  doAction() {
    this.deleteFireData();
  }
  setNum(i){
    this.setState({id_str:i})
  }

  deleteFireData() {
    let id = this.state.id_str;
    let db = firebase.database();
    let ref = db.ref("routines/" + id);
    ref.remove();
  }

  render() {
    return (
      <div>
        <div onClick={this.doAction()}>Delete</div>
      </div>
    );
  }
}

export default Delete;