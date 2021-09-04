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
        fetch(action.payload)
          .then(response => response.json())
          .then(json => {
            let questions: QuestionType[] = []
            json.keys().map((key: string) =>{
              questions.push(json[key])
            })
            state.questions = questions
          });
    })

    builder.addCase(setCounterValue, (state, action) => {
      if(action.payload != undefined){
        state.counter = action.payload
      }  
    })

  }
})

export default calculator.reducer