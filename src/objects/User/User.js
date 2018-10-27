import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';

import InfoPage from '../../pages/InfoPage/InfoPage';

import styles from './User.module.scss';

class User extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <InfoPage type={"user"}
                routeParams={this.props}
                id={this.props.match.params.username}
                navigation={["history", "keys"]}
                image={<img src={"http://robohash.org/" + this.props.match.params.username + "?bgset=bg2"} />}
                buttons={[{text: "Manage Keys", icon: "vpn_key"}, {text: "Invite", icon: "person_add", type: "dialog"}, {text: "test", icon: "person_add"}]} />

    );
  }
}

export default User;
