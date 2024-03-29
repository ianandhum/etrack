//React
import React from 'react';
import ReactDOM from 'react-dom';

// Css Style provider
import { Provider as ThemeProvider} from 'reakit'

// Redux  and router 
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

// store configuration
import configureStore,{history} from './data/store'
import initStore from './data/store.init'

//routes
import Routes from './routes'

//themes
import {defaultTheme} from './style/index'




//the store
const store = configureStore(initStore)

const Root  = (props)=>(
    <>
        <Provider store={store}>
            <ThemeProvider theme={defaultTheme}> 
                <ConnectedRouter history={history}> 
                    <>
                        <Routes/>
                    </>
                </ConnectedRouter>
            </ThemeProvider>        
        </Provider>
    </>
)

ReactDOM.render(<Root/>,document.getElementById('root'));
