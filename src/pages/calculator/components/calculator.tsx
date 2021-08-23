import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {Anchor, Box, Button, Heading, RadioButton, RadioButtonGroup, Text, TextInput} from 'grommet'
import Page from '../../../components/page'


interface QuestionType {
    questionNumber: number,
    questionText: string,
    questionAnswer: string | number,
    questionSecondaryText: string,
    questionScoreValue?: number | number[]
    questionSuccessor?: number | number[]
    questionChoices?: string[]
}

const getQuestions = () => {
    const q1: QuestionType = {
        questionNumber: 1,
        questionText: "Have you got a few minutes to estimate your personal carbon emissions?",
        questionAnswer: "",
        questionSecondaryText: "The calculator shouldn't take more than 5 minutes, but if you'd prefer you can continue with the average emissions of an adult in the UK.",
        questionScoreValue: [0, 9150],
        questionSuccessor: 2, // or redirect No answer
        questionChoices: ["Yes", "No"]
    }
    const q2: QuestionType = {
        questionNumber: 2,
        questionText: "How often do you eat meat?",
        questionAnswer: "",
        questionScoreValue: [2620.7, 2054.95, 1704.55, 1438.1, 1390.65, 1051.2],
        questionSecondaryText: "",
        questionChoices: ["In most meals (almost every day)", "In most meals (2-4 times a week)", "Infrequently (<2 times a week)", "Pescatarian", "Vegetarian", "Vegan"]
    }
    const q3: QuestionType = {
        questionNumber: 3,
        questionText: "Which mode of transport do you use most frequently?",
        questionAnswer: "",
        questionChoices: [
            "Car",
            "Motorcycle",
            "Electric Vehicle",
            "Public Transport",
            "Bicycle/Walking"
        ],
        questionSecondaryText: ""
    }
    const q4: QuestionType = {
        questionNumber: 4,
        questionText: "How many hours do you spend travelling each week?",
        questionAnswer: "",
        questionSecondaryText: "",
        questionChoices: [
            "Less than 5",
            "5-10",
            "10-15",
            "15-20",
            "20-25",
            "More than 25"
        ]
    }
    const q5: QuestionType = {
        questionNumber: 5,
        questionText: "Would you like to offset your flights?",
        questionAnswer: "",
        questionChoices: ["Yes", "No"],
        questionSecondaryText: ""
    }
    const q6: QuestionType = {
        questionNumber: 6,
        questionText: "How many super long haul flights (10+ hours) did you take last year?",
        questionAnswer: "",
        questionSecondaryText: ""
    }
    const q7: QuestionType = {
        questionNumber: 7,
        questionText: "How many short haul flights (<7 hours) did you take last year?",
        questionAnswer: "",
        questionSecondaryText: ""
    }
    const q8: QuestionType = {
        questionNumber: 8,
        questionText: "How many long haul flights (7-10 hours) did you take last year?",
        questionAnswer: "",
        questionSecondaryText: ""
    }
    const q9: QuestionType = {
        questionNumber: 9,
        questionText: "Are you on a renewable electricity tariff?",
        questionAnswer: "",
        questionChoices: ["Yes", "No"],
        questionSecondaryText: ""
    }
    const q10: QuestionType = {
        questionNumber: 10,
        questionText: "What is the monthly electricity bill for your home? If you live with others, please only account for the proportion you use",
        questionAnswer: "",
        questionChoices: [
                    "£0-£25",
                    "£25-£50",
                    "£50-£100",
                    "More than £100",
                    "Uncertain (UK average will be used)"
                ],
        questionSecondaryText: ""
    }
    const q11: QuestionType = {
        questionNumber: 11,
        questionText: "\"What is the monthly heating bill for your home? If you live with others, please only account for the proportion you use\"",
        questionAnswer: "",
        questionChoices: [
                    "£0-£25",
                    "£25-£50",
                    "£50-£100",
                    "More than £100",
                    "Uncertain (UK average will be used)"
                ],
        questionSecondaryText: ""
    }
    const q12: QuestionType = {
        questionNumber: 12,
        questionText: "How many new large appliances (e.g. mobile phones, laptops, TVs, white goods) do you typically buy in a year?",
        questionAnswer: "",
        questionSecondaryText: ""
    }
    const q13: QuestionType = {
        questionNumber: 13,
        questionText: "How much do you spend in an average month on clothing? Please do not include items you have bought second hand",
        questionAnswer: "",
        questionChoices: [
                    "£0-£20",
                    "£20-£50",
                    "£50-£100",
                    "More than £100"
                ],
        questionSecondaryText: ""
    }
    return [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13]
}

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
    return <Box fill flex={true} direction='column'>
            <RadioButtonGroup
          name="radio"
          options={options.map(o => {return {label: o, value: o}})}
          value={value}
          onChange={event => setValue(event.target.value)}
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
    const questions: QuestionType[] = getQuestions()
    const [questionCounter, setQuestionCounter] = useState(0)
    const question = questions[questionCounter]
    return <Page>
        <Box fill direction='column'>
            <Heading size='small' alignSelf='center' color='white' textAlign='center' margin='large'> Carbon Calculator
                Calculator </Heading>
            {
                questions ?
                    <Box fill direction='column' round='small' align='center'>
                        <Question question={question}/>
                        <FlowControls questions={questions} questionCounter={questionCounter}
                                      setQuestionCounter={setQuestionCounter}/>
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
                            {/*{*/}
                            {/*    question.questionChoices &&*/}
                            {/*    question.questionChoices.map(o => <InputOption key={o} option={o}/>)*/}
                            {/*}*/}
                            <ButtonGroup options={question.questionChoices}/>
                        </Box>
                    }
                </AnswerInput> :
                <AnswerInput label="Your Answer:">
                    <TextInput
                        value={question.questionAnswer}
                        onChange={event => question.questionAnswer = event.target.value}
                    />
                </AnswerInput>
        }
    </Box>
}


const FlowControls = ({questions, questionCounter, setQuestionCounter}:
                          { questions: QuestionType[], questionCounter: number, setQuestionCounter: (n: number) => void }) => {
    return <Box flex direction='row' alignContent='center' pad='xlarge' margin='medium' gap='large'>
        <Box background={{color: 'black', opacity: 'medium',}} round='large'>
            <Button
                label='Prev'
                onClick={() => {
                    if (questions[(questionCounter - 1)]) {
                        setQuestionCounter(questionCounter - 1)
                    }
                }}
            />
        </Box>
        <Box background={{color: 'black', opacity: 'medium',}} round='large'>
            {
                questions[(questionCounter + 1)] ?
                    <Button
                        label='Next'
                        onClick={() => {
                            if (questions[(questionCounter + 1)]) {
                                setQuestionCounter(questionCounter + 1)
                            }
                        }}
                    /> :
                    <Box background={{color: 'black', opacity: 'medium',}} round='small' pad='medium'>
                        <Anchor alignSelf='center' color='white' href="/results"> View Results </Anchor>
                    </Box>
            }
        </Box>
    </Box>
}