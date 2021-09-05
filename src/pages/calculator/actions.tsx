import React from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { produce } from 'immer'
import Api from '../../api/index'
import {createAction} from "@reduxjs/toolkit";
import { QuestionType }from '../../interfaces/generated_interfaces'

export const getQuestions = createAsyncThunk<
    QuestionType[]
    >(
    'calculator/getQuestions/',
    async () => {
        let api = new Api()
        const question_obj = await api.get('/settleup.co.uk/calculator')
        return question_obj['questions']
    }
)

export const updateAnswer = createAsyncThunk<
    (string | number), //return type of eventual execution
    { answer: (string | number) } //typescript args to thunk
    >(
    "calculator/updateAnswers/",
    async ({answer}) => {
        let api = new Api()
        return await api.post(`/calculator/`, { "answer": answer })
  }
)

export const loadQuestions = createAction<string>("calculator/loadQuestions")

export const setCurrentQuestionId = createAction<number| undefined>("calculator/setCurrentQuestionId/")

export const setCounterValue = createAction<number | undefined>("calculator/setCounterValue/")