import React, {Fragment} from 'react';
import styled from '@emotion/styled';
import {setQuestion} from '../actions';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';


const Title = styled.h1`
  color:white;
  font-size: 2.25rem;
  text-align:center;
`;

const Container = styled.div`
 width: 100%;
 height: 100%;
 display:flex;
 justify-content:center;
 align-items: center;
`;

const Holder = styled.section`
 width:90%;
 max-width: 600px;
 justify-content:center;
 align-items: center;
`;

const Btn = styled.button`
  width: 100%;
  padding: 1em;
  font-size: 1.25rem;
  background: red;
  color:white;
  font-weight:bold;
  outline:none;
  border:none;
`;


const MainQuiz = ({setQuestion,location}) => {
    let history = useHistory();
    const handleGetQuestion = async () => {
        const url = 'https://jservice.io/api/random';
        try{
          const  response = await fetch(url);
          const quest = await response.json();
          setQuestion(quest[0]);
          history.push('/questionView');
        } catch (error) {
          console.log(error);  
        }
    }

    return ( 
      <Fragment>
        <Container>
          <Holder>
            <Title> React Quiz </Title>
            <Btn onClick={ () => {
              handleGetQuestion();
            }}> 
               Iniciar 
            </Btn>
          </Holder>
        </Container>
      </Fragment>  
    );
}



const mapDispatchToProps =  {
  setQuestion 
}
 
export default connect(null,mapDispatchToProps)(MainQuiz);