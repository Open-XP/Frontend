import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouterHooks } from "../../../withRouters/withRoutersHook";
import { fetchSubjectQuestions, startTest } from "../../../Actions/Quiz";

class Evaluation extends Component {
  static propTypes = {
    subjectQuestions: PropTypes.array.isRequired,
    testInstances: PropTypes.object.isRequired,
    startTest: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    fetchSubjectQuestions: PropTypes.func.isRequired,
  };

  state = {
    currentQuestionIndex: 0,
    selectedOption: null,
    loading: true,
    nextIndex: 0,
  };

  componentDidMount() {
    const { testInstances, fetchSubjectQuestions } = this.props;
    if (testInstances && testInstances.id) {
      this.setState({ loading: true }); // Set loading to true before fetching data
      fetchSubjectQuestions(testInstances.id)
        .then((data) => {
          this.setState({ loading: false }); // Set loading to false after data is fetched
        })
        .catch((error) => {
          console.error("Fetching questions failed:", error);
          this.setState({ loading: false }); // Ensure loading is set to false even if there is an error
        });
    }
  }

  // componentDidUpdate(prevProps) {
  //   // Check if subjectQuestions has been updated
  //   if (prevProps.subjectQuestions !== this.props.subjectQuestions) {
  //     console.log(
  //       "Question count updated:",
  //       this.props.subjectQuestions.length
  //     );
  //   }
  // }

  handleNextQuestion = () => {
    this.setState((prevState, props) => {
      const nextIndex = prevState.currentQuestionIndex + 1;
      if (nextIndex < props.subjectQuestions.length) {
        return { currentQuestionIndex: nextIndex };
      }
    });
  };

  handlePreviousQuestion = () => {
    this.setState((prevState) => {
      const newIndex = Math.max(0, prevState.currentQuestionIndex - 1);
      return { currentQuestionIndex: newIndex };
    });
  };
  handleOptionChange = (option) => {
    this.setState({ selectedOption: option });
  };

  renderQuestion = () => {
    const { subjectQuestions } = this.props;
    const { currentQuestionIndex } = this.state;

    if (this.state.loading) {
      return <div>Loading questions...</div>;
    }

    if (!subjectQuestions || subjectQuestions.length === 0) {
      return <div>No questions available.</div>;
    }

    const currentQuestion = subjectQuestions[currentQuestionIndex];
    const options = [
      currentQuestion.option_A,
      currentQuestion.option_B,
      currentQuestion.option_C,
      currentQuestion.option_D,
      currentQuestion.option_E,
    ].filter((option) => option !== undefined && option !== "");

    return (
      <div className="flex flex-col gap-4 mt-4">
        <div className="font-[500] h-fit text-[2.25rem]">
          {currentQuestion.question}
        </div>
        {options.map((option, index) => (
          <div key={index} className="flex items-center gap-4">
            <input
              type="radio"
              name="option"
              className="w-[1.938rem] h-[1.938rem]"
              checked={this.state.selectedOption === option}
              onChange={() => this.handleOptionChange(option)}
            />
            <div className="font-[600] text-[2rem]">{option}</div>
          </div>
        ))}
      </div>
    );
  };

  render() {
    const { currentQuestionIndex, subjectQuestions, testInstances } =
      this.props;
    const totalQuestions = subjectQuestions.length;
    const displayIndex = this.state.currentQuestionIndex + 1;
    console.log("The question number is:", displayIndex);

    return (
      <div className=" flex flex-col w-screen h-screen -m-[9.9rem]">
        <div className="flex w-screen justify-center shadow-xl">
          <div className="flex flex-row w-[80%] h-[6.375rem] justify-between items-center">
            <div className="flex gap-4 items-center">
              <Link to={"/dashboard"}>
                <button className="flex w-[1.8rem] h-[1.8rem]">
                  <ArrowLeftIcon />
                </button>
              </Link>
              <div className="font-[700] text-[1.5rem]">
                {testInstances && testInstances.subject} Question:{" "}
                {testInstances.year}
              </div>
            </div>
            <div className="flex text-[#2D9CDB] text-[1.5rem] font-[700] items-center">
              <div>Timer: 25mins Left</div>
            </div>
          </div>
        </div>
        <div className="flex w-screen justify-center mt-[8.25rem]">
          <div className="flex flex-col w-[80%] mt-[rem] gap-4">
            <div className="font-[400] text-[#3C3C3C] text-[1.5rem]">
              Question {displayIndex}/{totalQuestions}
            </div>
            {this.renderQuestion()}
            <div className="flex justify-between pt-[3rem]">
              <button
                className="bg-[#281266] w-[12.25rem] h-[4.5rem] rounded-lg font-[700] text-white text-[1.5rem]"
                onClick={this.handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>
              <button
                className="bg-[#BBE6FF] w-[12.25rem] h-[4.5rem] rounded-lg font-[700] text-[1.5rem]"
                onClick={this.handleNextQuestion}
                disabled={currentQuestionIndex === totalQuestions - 1}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  subjectQuestions: state.quiz.subjectQuestions,
  testInstances: state.quiz.testInstances,
});

const mapDispatchToProps = {
  fetchSubjectQuestions,
  startTest,
};

export default withRouterHooks(
  connect(mapStateToProps, mapDispatchToProps)(Evaluation)
);
