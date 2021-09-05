import React, {useEffect, useState} from 'react'
import { CalculatorState } from '../state'
import { useDispatch, useSelector } from 'react-redux'
import {Anchor, Box, Button, Heading, RadioButton, RadioButtonGroup, Text, TextInput} from 'grommet'
import Page from '../../../components/page'
import { getQuestions, loadQuestions, setCurrentQuestionId, updateAnswer } from '../actions'
import { QuestionType } from '../../../interfaces/generated_interfaces'
import { current } from '@reduxjs/toolkit'


const AnswerInput = ({children, label}: { children: React.ReactElement, label: string }) => {
    return <Box fill flex={true} direction='column'>
        <Box basis='1/3'>
            <Text color='white' size='small'> {label} </Text>
        </Box>
        <Box basis='2/3'>
            {children}
        </Box>
    </Box>
}

const ButtonGroup = ({options}: { options: string[] }) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch()
    return <Box fill flex={true} direction='column'>
            <RadioButtonGroup
          name="radio"
          options={options.map(o => {return {label: o, value: o}})}
          value={value}
          onChange={event => dispatch(updateAnswer({answer: event.target.value}))}
        />
        </Box>
}

const InputOption = ({option}: { option: string }) => {
    return <Box alignContent='center' gap='medium'>
        <Text color='white' size='large'>{option}</Text>
        <RadioButton
            name={option}
            onChange={() => {
            }}
        />
    </Box>
}


export const Calculator = () => {
    const dispatch = useDispatch()
    const questions = useSelector<CalculatorState, QuestionType[]>(state => state.questions)
    const currentQuestionId = useSelector<CalculatorState, number>(state => state.currentQuestionId) | 1
    useEffect(() => {
        if(questions.length === 0){
            console.log("Dispatching load questions...")
            //dispatch(loadQuestions('./src/data/questions.json'))
            dispatch(getQuestions())
        }},
    [questions])
    const question = questions[currentQuestionId]
    return <Page>
        <Box fill direction='column'>
            <Heading size='small' alignSelf='center' color='white' textAlign='center' margin='large'> Carbon Calculator
                </Heading>
            {
                questions.length !== 0 ?
                    <Box fill direction='column' round='small' align='center'>
                        <Question question={question}/>
                        <FlowControls questions={questions} currentQuestionId={currentQuestionId}/>
                    </Box> :
                    <Text> No Questions defined </Text>
            }
        </Box>
    </Page>
}

export default Calculator;


const Question = ({question}: { question: QuestionType }) => {
    const dispatch = useDispatch()
    return <Box align='center' margin='xlarge'>
        <Text color='white' weight='bold' size='Large' margin='large'> {question.questionText} </Text>
        {
            question.questionChoices ?
                <AnswerInput label='Select an Option:'>
                    {
                        <Box flex fill direction='row' gap='small' alignContent='center' margin='large'>
                            <ButtonGroup options={question.questionChoices.map(c => c.value)}
                            />
                        </Box>
                    }
                </AnswerInput> :
                <AnswerInput label="Your Answer:">
                    <TextInput
                        value={question.questionAnswer}
                        onChange={event => dispatch(updateAnswer({answer: event.target.value}))}
                    />
                </AnswerInput>
        }
    </Box>
}


const FlowControls = ({ questions, currentQuestionId }:
                      { questions: QuestionType[], currentQuestionId: number }) => {
    const dispatch = useDispatch()
    return <Box flex direction='row' alignContent='center' pad='xlarge' margin='medium' gap='large'>
        <Box background={{color: 'black', opacity: 'medium',}} round='large'>
            <Button
                label='Prev'
                onClick={() => { dispatch(setCurrentQuestionId(currentQuestionId-1))}}
            />
        </Box>
        { questions[(currentQuestionId + 1)] ?
            <Box background={{color: 'black', opacity: 'medium',}} round='large'>
                <Button
                    label='Next'
                    onClick={() => { dispatch(setCurrentQuestionId(currentQuestionId+1)) }}
                /> 
            </Box>:
            <Box background={{color: 'black', opacity: 'medium',}} round='small' pad='medium'>
                <Anchor alignSelf='center' color='white' href="/results"> View Results </Anchor>
            </Box>
        }
    </Box>
}
