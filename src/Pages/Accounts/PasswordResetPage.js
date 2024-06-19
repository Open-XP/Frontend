import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouterHooks } from "../../withRouters/withRoutersHook";
import PropTypes from "prop-types";
import { resetpassword } from "../../Actions/Auth";

export class PasswordResetPage extends Component {
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
    const { email } = this.state;
    return (
      <div className="flex w-full h-screen justify-center items-center">
        <div className="flex flex-col w-[90rem] h-[70.063rem] justify-center items-center gap-[4rem]">
          <div className="flex flex-col w-[31.5rem] h-[6.313rem] items-center  gap-[0.8rem]">
            <div className="font-[700] text-[2.5rem] font-sans leading-[3.404rem]">
              Reset Password
            </div>
            <div className="font-[500] text-[1.5rem] leading-[2.043rem]">
              Do not have an account?{" "}
              <Link to={"/signup"} className="text-skyblue-secondary">
                Create an account
              </Link>
            </div>
          </div>
          <div className="flex flex-col w-[74.75rem] h-[47.125rem] items-center justify-center gap-[0.938rem] shadow-custom2">
            <form onSubmit={this.onSubmit}>
              <div className="flex flex-col w-[65.688rem] h-[23.438rem] gap-[0.938rem]">
                <div className="flex flex-col gap-[0.625rem]">
                  <div className="flex justify-between">
                    <div className="pl-[0.5rem] font-[700] text-[1.5rem] leading-[2.043rem]">
                      Email<span className="text-red-700 items-center"> *</span>
                    </div>
                  </div>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    placeholder="Email Address"
                    className="w-full h-[3.125rem] border-none bg-[#E9F0FA] rounded-[0.625rem] pl-[1.25rem] text-[1.5rem] font-[600] font-sans flex items-center"
                  />
                </div>
                <div className="flex flex-col gap-[1.625rem]">
                  <button
                    onSubmit={this.onSubmit}
                    className="w-[14.438rem] h-[3.438rem] font-sans font-[700] text-[1.438rem] leading-[2.043rem] bg-[#D9D9D952] bg-opacity-32 rounded-xl hover:bg-skyblue-secondary"
                  >
                    Reset Password
                  </button>
                </div>
                <div className="font-[400] text-[1.25rem] relative top-[20rem]">
                  By Continuing, You agree to Openxp{" "}
                  <span className="font-[400] text-[1.25rem] text-skyblue-secondary">
                    Terms
                  </span>{" "}
                  of service and{" "}
                  <span className="font-[400] text-[1.25rem] text-skyblue-secondary">
                    Privacy Policy
                  </span>{" "}
                </div>
              </div>
            </form>
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
  connect(mapStateToProps, { resetpassword })(PasswordResetPage)
);
