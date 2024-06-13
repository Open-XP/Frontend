import React, { useState, Component } from "react";
import { connect } from "react-redux";
import "./LogInPage.css";
import { Link, Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { login } from "../../Actions/Auth";

export class LogInPage extends Component {
  state = {
    email: "",
    password: "",
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Navigate to="/dashboard" />;
    }
    const { email, password } = this.state;
    return (
      <div className="l-i-p-row">
        <div className="l-i-p-login">
          <p>Log In</p>
          <div className="l-i-p-login-body">
            <p>
              Don't have an account?{" "}
              <Link className="l-i-create-an-account-link">
                Create an account here
              </Link>
            </p>
          </div>
        </div>
        <div className="l-i-p-bg">
          <div className="login-options-icons">
            <div className="l-i-login-options-individual">
              <img
                id="l-i-icon-control"
                src={require("../../icons/linkedin.png")}
              />
              <div id="l-i-font-control">LinkedIn</div>
            </div>
            <div className="l-i-login-options-individual">
              <img
                id="l-i-icon-control"
                src={require("../../icons/google.png")}
              />
              <div id="l-i-font-control">Google</div>
            </div>
            <div className="l-i-login-options-individual">
              <img
                id="l-i-icon-control"
                src={require("../../icons/facebook.png")}
              />
              <div id="l-i-font-control">facebook</div>
            </div>
            <div className="l-i-login-options-individual">
              <img
                id="l-i-icon-control"
                src={require("../../icons/microsoft.png")}
              />
              <div id="l-i-font-control">Microsoft</div>
            </div>
          </div>
          <div className="l-i-line">
            <div className="l-i-line-1"></div>
            <div className="l-i-line-or">OR</div>
            <div className="l-i-line-2"></div>
          </div>
          <form onSubmit={this.onSubmit}>
            <div>
              <div className="l-i-bg-2">
                <div className="l-i-enter-email">
                  <p>
                    Email <span>*</span>
                  </p>
                  <input
                    className="l-i-placeholder"
                    type="text"
                    placeholder="Johndoes@gmail.com"
                    value={email}
                    name="email"
                    onChange={this.onChange}
                  />
                </div>
                <div className="l-i-bg-3">
                  <div className="l-i-enter-password">
                    <p>
                      Enter password <span>*</span>
                    </p>
                    <div className="l-i-remember-and-forget-pw">
                      <div>
                        <img
                          className="l-i-show-password-eye"
                          src={require("../../icons/view.png")}
                        />
                      </div>
                      <p>Show password</p>
                    </div>
                  </div>
                </div>

                <div className="l-i-show">
                  <input
                    className="l-i-placeholder"
                    type="password"
                    placeholder="Type your password"
                    name="password"
                    onChange={this.onChange}
                    value={password}
                  />
                </div>
                <div className="l-i-r-c-f-p">
                  <input
                    className="l-i-check-box"
                    type="checkbox"
                    id="remember-me"
                    name="remember-me"
                  />
                  <div className="l-i-remember-me">
                    <p>Remember me</p>
                  </div>
                  <div className="l-i-forgot-password">
                    <Link>Forgot your password?</Link>
                  </div>
                </div>
                <div className="l-i-button">
                  <button type="submit">Log In</button>
                </div>
                <div className="l-i-t-o-s">
                  <p>
                    By continuing you agree to OpenXP{" "}
                    <span>Terms of Service</span> and{" "}
                    <span>Privacy Policy</span>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth?.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LogInPage);
