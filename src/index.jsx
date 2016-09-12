import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducer';
import WinTracker from './components/WinTracker';

// hotmodule reloading fix
if (module.hot) {
  module.hot.accept();
}

require('./style.css');

const store = createStore(reducer);
store.dispatch({
  'type': 'SELECT_HERO',
  'leader': 'Shadowcraft',
});

const setResult = (selected) => {
  console.log(selected);
}

ReactDOM.render(
  <Provider store={store}>
    <WinTracker setResult={setResult} />
  </Provider>,
  document.getElementById('app')
);
