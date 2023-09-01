const Question = ({ data, selectedAnswer, handleAnswer }) => {
  return (
    <div>
      <div className="question">
        <h2>{data.question}</h2>
      </div>
      <div className="option-container">
        <div className="left">
          {data.options.map((option, index) => {
            if (selectedAnswer === index) {
              return (
                <button
                  style={{ backgroundColor: "#E2CFEA" }}
                  onClick={() => handleAnswer(index, data.id)}
                >
                  {option}
                </button>
              );
            }
            return (
              <button onClick={() => handleAnswer(index, data.id)}>
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Question;
