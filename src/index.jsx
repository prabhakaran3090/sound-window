import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore'; 
import App from './container/AppContainer';

const render = (Component) => {
    return ReactDOM.render(
        <AppContainer>
            <Provider store={configureStore()}> 
                <Component/> 
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
}

render(App);

if(module.hot){
    module.hot.accept('./container/AppContainer', () => {
        render(App)
    });
}