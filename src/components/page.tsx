import React from 'react'
import {Box, Grommet, Text} from 'grommet'
import forest from '../data/forest.jpg'
import {css} from 'styled-components'
import {grommet} from 'grommet/themes'
import {deepMerge} from 'grommet/utils'
import { useSelector, useDispatch} from "react-redux";
import { CalculatorState } from '../pages/calculator/state'
import { setCounterValue } from '../pages/calculator/actions'


const customTheme = deepMerge(grommet, {
    radioButton: {
        border: {
            color: 'white',
        },
        container: {
            extend: css`
        color: white;
      `,
        },
        hover: {
            border: {
                color: 'red',
            },
            icon: {
                color: 'red'
            },
            container: {
                extend: css`
        color: blue;
      `
            }
        },
        check: {
            color: 'white',
            border: {color: 'white'},
            radius: '20%',
        }
    },
    textInput: {
        extend: () => `
      font-size: 20px;
      background: #eeeeee;
      margin: 0 auto;

      &:focus {
        box-shadow: none;
        border-color: initial;
      }
    `
    },
})


export const Page = ({children}: { children: string | React.ReactElement }) => {
    const dispatch = useDispatch()
    const counter = useSelector<CalculatorState, number>(state => state.counter)
    const text = `v0.${counter}.0 - Copyright SettleUp ltd. 2021`
    return <Grommet theme={customTheme}>
        <Box fill direction='column' align='center' gap='small' background={`url('${forest}')`}>
            {children}
            <Box align='center' margin='large' justify='end' round='small' pad='medium' background='black'>
                <Text size='xsmall' color='white'>{text}</Text>
                <Box align='center' fill direction='row' gap='xsmall'>
                    <button onClick={()=> dispatch(setCounterValue( counter + 1 ))}>Increment</button>
                    <button onClick={()=> dispatch(setCounterValue( counter - 1 ))}>Decrement</button>
                    <button onClick={()=> dispatch(setCounterValue( 5 ))}>Set to 5...</button>
                </Box>
            </Box>
        </Box>
    </Grommet>
}

export default Page;