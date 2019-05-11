import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  // LOGIN_PAGE_UNLOADED
} from '../constants/actionTypes';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onSubmit: (password) =>
    dispatch({ type: LOGIN, payload: agent.Auth.login(password) }),
  // onUnload: () =>
  //   dispatch({ type: LOGIN_PAGE_UNLOADED })
});

class Login extends React.PureComponent {
  constructor() {
    super();
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.submitForm = (password) => ev => {
      ev.preventDefault();
      this.props.onSubmit(password);
    };
  }

  componentWillUnmount() {
    // this.props.onUnload();
  }

  render() {
    const password = this.props.password;
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>

              <ListErrors errors={this.props.errors} />

              <form onSubmit={this.submitForm(password)}>
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Enter pass code"
                      value={password}
                      onChange={this.changePassword} />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={this.props.inProgress}>
                    Sign in
                  </button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
