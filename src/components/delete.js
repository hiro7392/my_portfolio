import React, { Component } from "react";
import firebase from "firebase";
import "firebase/storage";

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_str: props
    };
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChange(e) {
    this.setState({
      id_str: e.target.value
    });
  }

  doAction(e) {
    this.deleteFireData();
  }
  

  deleteFireData() {
    let id = this.state.id_str;
    let db = firebase.database();
    let ref = db.ref("sample/" + id);
    ref.remove();
  }

  render() {
    return (
      <div>
        
        <button onClick={this.doAction}>Delete</button>
      </div>
    );
  }
}

export default Delete;