import React from 'react';
import PropTypes from 'prop-types';

const Category = ({
  category,
  currentQuestion,
  handleSubmit,
  answerInput,
  resetScore,
  changeCategory,
  score,
  life,
  answerFalse
}) => {

  return ( <
    section className = "game" >

    <
    form className = "form"
    onSubmit = {
      handleSubmit
    } >
    <
    div className = "contentTitle" > < h1 className = "title" > Category: {
      category.title
    } < /h1></div >
    <
    button className = "change"
    type = "button"
    onClick = {
      () => changeCategory()
    } >
    change the category <
    /button> <div id = "question"> <
    h3 className = "questionTitle" > {
      currentQuestion
    } < /h3><div className = "questionAnswerInput" > <
    input ref = {
      answerInput
    }
    /> < /
    div > <
    button className = "questionSubmit"
    type = "submit" >
    Valid <
    /button> <
    h4 > Your score: < /h4><p>{score}</p >
    <
    h4 > Life: < /h4><p>{life}</p > < p > {
      answerFalse
    } < /p> < /
    div >

    <
    div id = "gameOver" >
    <
    h4 > Game Over < /h4> <
    button className = ""
    type = "button"
    onClick = {
      () => resetScore()
    } >
    reset <
    /button> < /
    div > <
    /form> </section >
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