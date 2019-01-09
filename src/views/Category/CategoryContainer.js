import React, { Component, createRef } from 'react';
import api from '../../helpers/api';
import Category from './Category';
import storage from '../../helpers/storage'
import './Category.css';

class CategoryContainer extends Component {
  state = {
    category: null,
    currentQuestion: 0,
    score: 0,
    life: 3,
    answerFalse: "",
    gameOver: "",
  }

  // createRef in order to bring back input value to its parent
  answerInput = createRef();

  // async needed when using promise
  async componentDidMount() {
    let data = await api.getCategoryById(this.props.match.params.id);
    // stored response in the state;
    this.setState({
      category: data,
    });

    let currentStorage = storage.getStorageItem('category'+this.state.category.id);
    // On vérifie si une sauvegarde n'existe pas dans le cache
    if(currentStorage != null){
      this.setState({
        currentQuestion: currentStorage[0],
        score: currentStorage[1],
        life: currentStorage[2],
      })
    }
  }

  // Fonction vérification
  handleSubmit = (e) => {
    let { category, currentQuestion, score, life } = this.state;
    let divGameOver = document.getElementById('gameOver');
    let answer = this.answerInput.current.value;

    e.preventDefault();

    console.log(category.clues) // On affiche dans la console les questions et reponses
    
    // Vérification de la reponse 
    if(answer === category.clues[currentQuestion].answer) {
      this.setState({
        score: score+1,
        answerFalse: "",
        currentQuestion: currentQuestion+1,
      })

      this.answerInput.current.value = "";

      if(currentQuestion === 4) {
        window.location.replace("/");
      }

      // Stockage du score et de la vie
      let saveCurrent = [currentQuestion, score, life];
      storage.setStorageItem('category'+this.state.category.id, saveCurrent)
    } else {
      this.setState({
        life: life-1,
        answerFalse: "Answer is false"
      })

      // Affichage du game over si life = 0
      if(life === 1) {
        divGameOver.style.display = "initial";
      }

      // Stockage du score et de la vie
      let saveCurrentQuestion = currentQuestion + parseInt(1);
      let saveScore = score + parseInt(1);
      let savelife = life + parseInt(1);
      let saveCurrent = [saveCurrentQuestion, saveScore, savelife];
      storage.setStorageItem('category'+this.state.category.id, saveCurrent)
    }
  }

  // Le changement de categorie
  changeCategory = () => {
    window.location.replace("/");
  }

  // Le reset du score et de la vie
  resetScore = () => {
    let divGameOver = document.getElementById('gameOver');

    divGameOver.style.display = "none";

    // On supprime l'ensemble des sauvegarde de la categorie 
    storage.removeStorageItem('category'+this.state.category.id)

    this.setState({
      score: 0,
      life: 3,
      answerFalse: "",
    })
  }

  // 

  render() {
    let { category, currentQuestion, score, life, answerFalse } = this.state;

    if (!category) return <div>is loading</div>

    return (
      <Category
        category={category}
        currentQuestion={category.clues[currentQuestion].question}
        handleSubmit={this.handleSubmit}
        answerInput={this.answerInput}
        changeCategory={this.changeCategory}
        resetScore={this.resetScore}
        score={score}
        life={life}
        answerFalse={answerFalse}
        gameOver={this.gameOver}
      />
    );
  }
}

export default CategoryContainer;