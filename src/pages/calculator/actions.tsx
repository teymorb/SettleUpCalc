import React from 'react'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { produce } from 'immer'
import Api from '../../api/index'
import {createAction} from "@reduxjs/toolkit";


export const getQuestions = createAsyncThunk<
    string[]
    >(
    'questionaire/getQuestions/',
    async () => {
        let api = new Api()
        return await api.get(`/questionaire`)
    }
)

export const updateAnswers = createAsyncThunk<
    string[], //return type of eventual execution
    {answers: string[]} //typescript args to thunk
    >(
    "questionaire/updateAnswers/",
    async ({answers}) => {
        let api = new Api()
        return await api.post(`/questionaire/`, answers)
  }
)