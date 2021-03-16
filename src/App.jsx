import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Donations from './Donations';
import './app.css'


function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Navbar />
                    <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/donations' component={Donations} />
                    </Switch>
                    
                </div>
                
            </Router>
            
        </>
    )
}

export default App
