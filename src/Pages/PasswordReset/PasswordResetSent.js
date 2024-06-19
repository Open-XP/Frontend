import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouterHooks } from "../../withRouters/withRoutersHook";
import PropTypes from "prop-types";
import { resetpassword } from "../../Actions/Auth";
import Confetti from "../../icons/confetti.png";

export class PasswordResetSent extends Component {
  state = {
    email: "",
  };

  static propTypes = {
    resetpassword: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    const { navigate } = this.props;
    e.preventDefault();
    this.props.resetpassword(this.state.email);
    navigate("/password-reset-sent");
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  toggleShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  render() {
    if (this.props.isAuthenticated) {
      this.props.navigate("/dashboard");
    }
    const { email, password, showPassword } = this.state;
    return (
      <div className="flex w-full h-screen justify-center items-center">
        <div className="flex flex-col w-[90rem] h-[70.063rem] justify-center items-center gap-[4rem]">
          <div className="flex flex-col w-[31.5rem] h-[6.313rem] items-center  gap-[0.8rem]">
            <div className="font-[700] text-[2.5rem] font-sans leading-[3.404rem]">
              Password Reset Success
            </div>
          </div>
          <div className="flex flex-col w-[74.75rem] h-[47.125rem] items-center justify-center gap-[0.938rem] shadow-custom2">
            <img src={Confetti} className="w-[20rem] h-[20rem]" />
            <div className="font-[700] text-[2rem] mt-[2rem]">Check Mail to comfirm your password reset</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth?.isAuthenticated,
});

export default withRouterHooks(
  connect(mapStateToProps, { resetpassword })(PasswordResetSent)
);
