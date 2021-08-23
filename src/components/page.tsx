import React from 'react'
import {Box, Grommet, Text} from 'grommet'
import food from '../Food.gif'
import {css} from 'styled-components'
import {grommet} from 'grommet/themes'
import {deepMerge} from 'grommet/utils'
import { useSelector, useDispatch} from "react-redux";
import { QuestionaireState } from '../pages/calculator/state'

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
    const dispatch = useDispatch();
    // @ts-ignore
    const counter = useSelector( (state : {QuestionaireState}) => state.questionaire);
    console.log(counter)
    return <Grommet theme={customTheme}>
        <Box fill direction='column' justify='center' gap='small' background={`url('${food}')`}>
            {children}
            <Box align='center' margin='large' justify='end' round='small' pad='medium'>
                <Text size='xsmall' color='white'>v0.{counter.counter}.0 - Copyright SettleUp ltd. 2021</Text>
                <button onClick={()=> dispatch({type: 'increment'})}>Increment</button>
            </Box>
        </Box>
    </Grommet>
}

export default Page;