import React, {Fragment,useState} from 'react';
import {connect} from 'react-redux';
import styled from '@emotion/styled';
import {setQuestion} from '../actions';

const QuestionView = ({trivia,setQuestion}) => {
    const {airdate,answer,category,question,value} = trivia;
    const [showAnswer, setShowAnswer] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);
    const [counter, setCounter] = useState(0);
    const CounterHolder =styled.div`
      background: #391cad;
      color: white;
      font-size: 1.25rem;
      font-weight: 600;
      width:100%;
      max-width: 600px;
      display: flex;
      justify-content: center;
      align-items:center;
      padding: 1em;
      box-sizing: border-box;
    `;
    
    const TriviaHeader = styled.header`
      width: 100%;
      max-width: 600px;
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 1em 0;
      box-sizing:border-box;
      color: white;
      font-size: 1rem;
      font-weight: 600;
    `;


    const TriviaBody = styled.div`
     width: 100%;
     max-width: 600px;
     margin: 0 auto;
     color:white;
     font-size: 1.25rem;
     padding: 1em;
     box-sizing: border-box;
    `;

    const AnswerButton = styled.button`
      width:100%;
      max-width: 600px;
      color: white;
      font-size:1.25rem;
      background:#391cad; 
      padding:1em;
      box-sizing: border-bottom;
      outline:none;
      border:none;
    `;

    const QuestionButton = styled.button`
      width:100%;
      max-width: 600px;
      color: white;
      font-size:1.25rem;
      background:#391cad; 
      padding:1em;
      box-sizing: border-bottom;
      outline:none;
      border:none;
    `;

    const NextBtn = styled.button`
      width:100%;
      max-width: 600px;
      color: white;
      font-size:1.25rem;
      background:#391cad; 
      padding:1em;
      box-sizing: border-box;
      margin:1em 0 0;
      outline:none;
      border:none;
    `;

    const ButtonHolder = styled.div`
     width:100%;
     max-width: 600px;
     display:block;
     margin: 0 0 1em;
    `;

    const CategoryTitle = styled.h1`
      margin: 1em 0;
      color: white;
      font-size: 1.5rem;
    `;

    const handleGetQuestion = async () => {
      const url = 'https://jservice.io/api/random';
      try{
        const  response = await fetch(url);
        const quest = await response.json();
        setQuestion(quest[0]);
      } catch (error) {
        console.log(error);  
      }
    }
     
    return ( 
      <Fragment>
       <div className="TriviaContainer">
        <div className="triviaHolder">
        <CounterHolder>
          Burned Questions : {counter}    
        </CounterHolder>
        <TriviaHeader>
          <span> {airdate} </span> 
          <span> {value} </span>
        </TriviaHeader>  
        <CategoryTitle> {category['title']} </CategoryTitle>  
        <TriviaBody>
          {showAnswer === true ? answer : question}  
        </TriviaBody>
        <ButtonHolder>
          {showAnswer === false ? (
            <AnswerButton
              onClick={()=>{
                setShowAnswer(true);
                setDisabledButton(false);
                if(disabledButton === true) {
                  setCounter(counter + 1)  
                }
              }}
            >
              Reveal Answer  
            </AnswerButton>
          ) : (
            <QuestionButton
              onClick={()=>{
                setShowAnswer(false);
              }}
            >
              View Question  
            </QuestionButton>
          )}
        </ButtonHolder>
        <ButtonHolder>
          <div className={disabledButton===true ? 'disabled-div' : 'enabled-div'}>
            <NextBtn
              disabled={disabledButton}
              onClick={()=>{
                handleGetQuestion();   
                setShowAnswer(false);
                setDisabledButton(true);
              }}
            >
              Next Question 
            </NextBtn>
          </div>
        </ButtonHolder>
        
        </div>  
       </div>
      </Fragment>
    );
}

const mapStateToProps = state => {
  return{
    trivia: state.trivia,
  } 
};

const mapDispatchToProps =  {
  setQuestion,
}
 
export default  connect(mapStateToProps, mapDispatchToProps)(QuestionView);