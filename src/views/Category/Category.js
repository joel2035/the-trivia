import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ category, currentQuestion, handleSubmit, answerInput, resetScore, changeCategory, score, life, answerFalse}) => {
  
  return (
    <section>
      <button className="" type="button" onClick={() => changeCategory()}>
        Change category
      </button>
      <form onSubmit={handleSubmit}>
        <h1>You choosed: {category.title}</h1>

        <div id="question">
          <h3 className="question__title">
            {currentQuestion}
          </h3>
          <div className="question__answerInput">
            <input ref={answerInput}/>
          </div>
          <button className="question__submit" type="submit">
            Valid
          </button>
          <h4>Your score:</h4><p>{score}</p>
          <h4>Life:</h4><p>{life}</p><p>{answerFalse}</p>
        </div>
        
        <div id="gameOver">
          <h4>Game Over</h4>
          <button className="" type="button" onClick={() => resetScore()}>
            reset
          </button>
        </div>
      </form>
    </section>
  );
  
}

Category.propTypes = {
  category: PropTypes.shape({}).isRequired,
  currentQuestion: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  answerInput: PropTypes.shape({
    value: PropTypes.instanceOf(HTMLInputElement)
  }),
};

export default Category;