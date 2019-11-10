import React, { Component } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import './UserDetails.css';

interface MyProps {
  match: {
    isExact: boolean,
    params: {
      login: string
    },
    path: string,
    url: string,
  };
}

class UserDetails extends Component<MyProps & RouteComponentProps> {
  state = {
    user: null,
  }

  constructor(props: MyProps & RouteComponentProps) {
    super(props);
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/' + this.props.match.params.login)
      .then(
        user => {
          this.setState({
            user: user.data
          });
        }
      );
  }

  render() {
    const goBack = <button><Link to="/">Go back to the list</Link></button>
    let details = <div>
      { goBack }
    </div>
    if (this.state.user) {
      const user = Object.create(this.state.user);

      details = 
      <div className="user-details">
        <img src={ user.avatar_url }
            alt="Avatar"
            className="avatar">
        </img>
        <h1>
          <a href={ user.url } >{ user.login }</a>
        </h1>
        <div className="row">
          <span className="key">Name:</span>
          <span className="value">{ user.name }</span>
        </div>
        <div className="row">
          <span className="key">Is site administrator:</span>
          <span className="value">{ user.site_admin ? 'Yes': 'No' }</span>
        </div>
        <div className="row">
          <span className="key">Bio:</span>
          <span className="value">{ user.bio }</span>
        </div>
        <div className="row">
          <span className="key">Location:</span>
          <span className="value">{ user.location }</span>
        </div>
        <div className="row">
          <span className="key">Public repos:</span>
          <span className="value">{ user.public_repos }</span>
        </div>
        <div className="row">
          <span className="key">Public gists:</span>
          <span className="value">{ user.public_gists }</span>
        </div>

        { goBack }
      </div>
    }

    return details;
  }
}

export default UserDetails;
