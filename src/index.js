import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import RouterMain from './components/RouterMain'
import InitStore from './components/AppStore'
import registerServiceWorker from './registerServiceWorker'
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Paragraph from 'grommet/components/Paragraph';
import 'semantic-ui-css/semantic.min.css'



/*****************App*************************/

const store = InitStore();
ReactDOM.render(
    <Provider store={store} >
                    <div>

                    <RouterMain />
                    </div>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();

