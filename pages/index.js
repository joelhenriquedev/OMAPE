import React from 'react'

import firebase from "../lib/firebase";

class Index extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = { loading: true, rfps: {} };
  }

  componentDidMount() {

    const database = firebase.database();
    const developers = database.ref("developers");

    developers.on("value", snapshot => {
      const rfps = snapshot.val();
      console.log(rfps);
    })


  }

  render() {
    //const { loading, rfps } = this.state;
    //const rfpKeys = Object.keys(rfps);
    return (
      <div>
        hhh
      </div>
    );
  }
}

    




export default Index