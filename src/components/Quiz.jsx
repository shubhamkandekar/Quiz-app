import { useState } from "react";
import "../layout/styles/main.css";
import Header from "../components/header";
import Question from "./Question";
import Nexticon from "../layout/Nexticon";
import Previcon from "../layout/Previcon";
import {useNavigate} from "react-router";

const Quiz = () => {
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [questions] = useState([
    {
      id: "q1",
      question: "What is React?",
      options: [
        "A) A JavaScript framework",
        "B) A CSS library",
        "C) A database management system",
        "D) A programming language",
      ],
      answer: 1,
    },
    {
      id: "q2",
      question: "What are components in React?",
      options: [
        "A) Reusable pieces of UI",
        "B) Database tables",
        "C) Programming paradigms",
        "D) Data query languages",
      ],
      answer: 1,
    },
    {
      id: "q3",
      question: "What is JSX?",
      options: [
        "A) JavaScript XML",
        "B) JavaScript JSON",
        "C) JavaScript HTML",
        "D) JavaScript CSS",
      ],
      answer: 1,
    },
    {
      id: "q4",
      question: "What is state in React?",
      options: [
        "A) A CSS property",
        "B) A JavaScript event",
        "C) An object that stores component data",
        "D) A function that updates the DOM",
      ],
      answer: 2,
    },
    {
      id: "q5",
      question: "What is the purpose of props in React?",
      options: [
        "A) To style the components",
        "B) To pass data between components",
        "C) To handle user events",
        "D) To manage component state",
      ],
      answer: 1,
    },
    {
      id: "q6",
      question: "What are lifecycle methods in React?",
      options: [
        "A) Methods that are invoked at specific phases of a component's life",
        "B) Methods that handle AJAX requests",
        "C) Methods that render the component's UI",
        "D) Methods that define component's data structure",
      ],
      answer: 0,
    },
    {
      id: "q7",
      question: "What is the difference between state and props in React?",
      options: [
        "A) State is mutable while props are immutable",
        "B) State is passed between components while props are not",
        "C) State is used to handle user input while props are not",
        "D) State is only used in functional components while props can be used in both functional and class components",
      ],
      answer: 2,
    },
    {
      id: "q8",
      question: "What is Redux?",
      options: [
        "A) A predictable state container for JavaScript apps",
        "B) A programming language",
        "C) An object-oriented framework",
        "D) A CSS preprocessor",
      ],
      answer: 0,
    },
    {
      id: "q9",
      question: "What are React hooks?",
      options: [
        "A) Functions that let you use React features in functional components",
        "B) Methods that update the Redux store",
        "C) Methods that handle DOM updates",
        "D) Functions that allow direct manipulation of the DOM",
      ],
      answer: 2,
    },
    {
      id: "q10",
      question: "What is the purpose of useEffect hook in React?",
      options: [
        "A) To perform side effects in functional components",
        "B) To update the component's state",
        "C) To handle form submissions",
        "D) To handle user interactions",
      ],
      answer: 1,
    },
  ]);

  const [answers, setanswers] = useState(questions.map((q) => null));
  const navigate = useNavigate();
  const handleAnswer = ( selectedAnswer, questionID) => {
    const questionIndex = questions.findIndex((q)=> q.id === questionID)
    setanswers((prev) =>
      prev.map((answer, index) => {
        if (index === questionIndex) {
          return selectedAnswer;
        }
        return answer;
      })
    );
  };

  const goNext = () =>
    setcurrentQuestion((prev) => {
      if (prev < questions.length - 1) {
        return prev + 1;
      }
    });
  const goBack = () =>
    setcurrentQuestion((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
    const submiTest = () => {
      // check if all questions are marked, if not display warning
      navigate("/result", {
        state: {
          answers: answers,
          questions: questions,
        },
      });
    };


    const attempted = answers.filter((a) => a !== null).length;
  return (
    <section>
      <div className="container">
        <div className="maincontainer">
          <Header answers={answers} />
          <Question handleAnswer={handleAnswer}
          selectedAnswer={answers[currentQuestion]}
          data={questions[currentQuestion]} />
          <div className="icons">
           {currentQuestion > 0 && <Previcon goBack={goBack} />}
            {currentQuestion < questions.length -1 && <Nexticon goNext={goNext} />}
          </div>
          <div onClick={submiTest} className="sumbit">
            <button className="end-test">{attempted === questions.length ? "Submit" : "End test"}</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Quiz;
