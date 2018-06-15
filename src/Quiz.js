import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = { quiz_position: 1 };
  }
  render() {
    const isQuizEnd;
    
    if ((this.state.quiz_position - 1) === quizData.quiz_questions.length) {
      isQuizEnd = true;
    } else {
      isQuizEnd = false;
    }
    return (
      if(isQuizEnd = false) {
        <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
      } else {
        <QuizEnd />
      }
    );
  }
}

export default Quiz

