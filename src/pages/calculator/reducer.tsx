import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit'
import { getQuestions, updateAnswers } from './actions'
import { QuestionaireState } from './state'


export const questionaire = createSlice<QuestionaireState, SliceCaseReducers<QuestionaireState>>({
  name: 'questionaire',
  initialState: { counter: 1,
                  currentQuestions: [],
                  currentAnswers: [],
                  currentQuestionId: 1,
  },
  reducers: {
    increment(state) {
      state.counter++
    },
    reset(state) {
      state.counter = 1
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getQuestions.pending, (state, action) => {

    })
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      state.currentQuestions = action.payload
    })
    builder.addCase(getQuestions.rejected, (state, action) => {

    })
    builder.addCase(updateAnswers.pending, (state, action) => {

    })
    builder.addCase(updateAnswers.fulfilled, (state, action) => {
      state.currentAnswers = action.payload
    })
    builder.addCase(updateAnswers.rejected, (state, action) => {

    })
  }
})

const {increment, reset} = questionaire.actions