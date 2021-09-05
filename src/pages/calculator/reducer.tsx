import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'
import { getQuestions, loadQuestions, setCounterValue, setCurrentQuestionId} from './actions'
import { QuestionType} from '../../interfaces/generated_interfaces'
import { CalculatorState } from './state'


export const calculator = createSlice<CalculatorState, SliceCaseReducers<CalculatorState>>({
  name: 'calculator',
  initialState: { counter: 1,
                  questions: [],
                  currentQuestionId: 1
  } as CalculatorState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getQuestions.pending, (state, action) => {

    })
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      console.log("Payload From Postman Server")
      console.log(action.payload)
      state.questions = action.payload
    })
    builder.addCase(getQuestions.rejected, (state, action) => {

    })

    builder.addCase(setCurrentQuestionId, (state, action) => {
      if(action.payload != undefined){
        state.currentQuestionId = action.payload
      }  
    })

    builder.addCase(loadQuestions, (state, action) => {
      console.log("Reducing Load Questions")
      try{
        fetch(action.payload)
          .then(response => response.json())
          .then(json => {
            console.log("JSON:", json)
            let questions: QuestionType[] = []
            JSON.parse(json).keys().map((key: string) =>{
              questions.push(json[key])
            })
            state.questions = questions
          });
      }
      catch(error){
        console.log(error)
        
      }
    })

    builder.addCase(setCounterValue, (state, action) => {
      if(action.payload != undefined){
        state.counter = action.payload
      }  
    })

  }
})

export default calculator.reducer