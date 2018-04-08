import React, {Component} from 'react';

import SidepaneMenu from '../components/presentational/Sidepane-Menu'

class Sidepane extends React.Component {
  constructor(props){
    super(props);
    console.log(this)
  }
  render() {
    return (
      <div>
        <SidepaneMenu />
      </div>

    )
  }
}

export default Sidepane