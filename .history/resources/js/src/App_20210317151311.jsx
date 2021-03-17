import React from 'react'
import ReacDOM f
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import  Index from './components/index'

const App = () => {
    return (
        <Router className="App__container">
            <Switch>
                <Route exact path='/' > 
                    <Index />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
