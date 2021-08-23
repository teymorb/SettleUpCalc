import React from 'react';
import { Route } from 'react-router'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Anchor, Box, Grommet, Heading, Nav, Text } from 'grommet'
import Page from '../components/page'
import Results from '../pages/results/components/results'
import Questionaire from '../pages/calculator/components/calculator'
import './App.css';


const Splash = () =>{
    return(
      <Page>
          <Box flex direction='column' align="center" gap='small'>
              <Heading size='large' textAlign='center' color="white"> Welcome To The SettleUp.Earth Carbon Calculator!</Heading>
              <Text alignSelf="center"
                    textAlign="center"
                    margin='large'
                    size="medium"
                    color="white">
                Information about the calculator goes here...
              </Text>
              <Nav>
                  <Box background={{color: 'black', opacity: 'medium',}} round='small' pad='medium'>
                      <Anchor alignSelf='center' color='white' href="/questionaire"> Take the Calculator...</Anchor>
                  </Box>
                  <Box background={{color: 'black', opacity: 'medium',}} round='small' pad='medium'>
                      <Anchor alignSelf='center' color='white' href="/results"> View Results </Anchor>
                  </Box>
              </Nav>
          </Box>
      </Page>
    )
}

export const App = () =>{
  const routes = [{
            name: 'Questionaire',
            path: '/questionaire',
            exact: true,
            component: () => <Questionaire />
        },
        {
            name: 'Results',
            path: '/results',
            exact: true,
            component: () => <Results />
        }]
    return <Box flex fill={true}>
        <Grommet>
              <Router>
                  <Switch>
                      <Route path='/' exact component={Splash}/>
                      {
                          routes.map(r => (
                                <Route
                                    key={r.path}
                                    path={r.path}
                                    exact={r.exact}
                                    component={r.component}
                                >
                                </Route>
                          ))
                        }
                    </Switch>
                  <Route />
              </Router>
        </Grommet>
    </Box>
}

export default App;