import React from 'react'
import ReacDOM from 'react-dom'
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

// export default App
ReactDOM.render(<App />)
