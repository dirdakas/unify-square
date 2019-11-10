import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import axios from 'axios';
import User from '../User/User';
import './Users.css';

class Users extends Component<RouteComponentProps<any>> {
  state = {
    users: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users')
      .then(
        users => {
          this.setState({
            users: users.data
          });
        }
      );
  }

  openUserDetails = (login: string) => {
    this.props.history
      .push(
        '/user/' + login
      );
  }

  render() {
    const users = this.state.users
      .map((item: any) => {
        return <User
          key={ item.login }
          login={ item.login }
          avatarUrl={ item.avatar_url }
          isAdmin={ item.site_admin }
          clicked={() => this.openUserDetails(item.login)} />
      });

    return (
      <div className="Users">
        <h3>Users list</h3>
        <section>
          { users }
        </section>
      </div>
    );
  }
}

export default Users;
