import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouterHooks } from "../../../withRouters/withRoutersHook";
import {
  fetchSubjectQuestions, // Assuming this fetches all questions for a subject
  fetchIndividualSubjectQuestion, // Assuming this fetches details for a single question
} from "../../../Actions/Quiz";

class Evaluation extends Component {
  static propTypes = {
    fetchSubjectQuestions: PropTypes.func.isRequired,
    fetchIndividualSubjectQuestion: PropTypes.func.isRequired,
    questions: PropTypes.array,
    question: PropTypes.object,
    testinstance: PropTypes.object.isRequired, // Making sure testinstance is marked as required
  };

  state = {
    currentQuestionIndex: 0,
    selectedOption: null,
  };

  componentDidMount() {
    const { fetchSubjectQuestions, testinstance } = this.props;
    if (testinstance && testinstance.subject) {
      fetchSubjectQuestions(testinstance.subject, testinstance.year);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Fetch individual question when moving to next or previous
    const { currentQuestionIndex } = this.state;
    if (currentQuestionIndex !== prevState.currentQuestionIndex) {
      const { fetchIndividualSubjectQuestion, questions } = this.props;
      if (questions.length > 0) {
        fetchIndividualSubjectQuestion(
          questions[currentQuestionIndex].id // Assuming each question has a unique ID
        );
      }
    }
  }

  handleNextQuestion = () => {
    const { currentQuestionIndex } = this.state;
    const { questions } = this.props;
    if (currentQuestionIndex < questions.length - 1) {
      this.setState({
        currentQuestionIndex: currentQuestionIndex + 1,
        selectedOption: null,
      });
    }
  };

  handlePreviousQuestion = () => {
    this.setState((prevState) => ({
      currentQuestionIndex: Math.max(0, prevState.currentQuestionIndex - 1),
      selectedOption: null,
    }));
  };

  handleOptionChange = (option) => {
    this.setState({ selectedOption: option });
  };

  renderQuestion = () => {
    const { question } = this.props;
    if (!question) {
      return <div>Loading question...</div>;
    }

    return (
      <div className="flex flex-col gap-4 mt-4">
        <div className="font-[500] h-fit text-[2.25rem]">{question.text}</div>
        {question.options.map((option, index) => (
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
    const { currentQuestionIndex, questions } = this.props; // Assuming questions array is in props
    const totalQuestions = questions ? questions.length : 0;
    const question = questions[currentQuestionIndex]; // Make sure to extract the current question like this

    return (
      <div className="flex flex-col w-screen h-screen -m-[9.9rem]">
        <div className="flex w-screen justify-center shadow-xl">
          <div className="flex flex-row w-[80%] h-[6.375rem] justify-between items-center">
            <div className="flex gap-4 items-center">
              <Link to={"/dashboard"}>
                <button className="flex w-[1.8rem] h-[1.8rem]">
                  <ArrowLeftIcon />
                </button>
              </Link>
              <div className="font-[700] text-[1.5rem]">
                {question && question.subject} Question:{" "}
                {question && question.year}
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
              Question {currentQuestionIndex + 1}/{totalQuestions}
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
  questions: state.quiz.questions,
  question: state.quiz.question,
  testinstance: state.quiz.testinstance,
});

const mapDispatchToProps = {
  fetchSubjectQuestions,
  fetchIndividualSubjectQuestion,
};

export default withRouterHooks(
  connect(mapStateToProps, mapDispatchToProps)(Evaluation)
);
