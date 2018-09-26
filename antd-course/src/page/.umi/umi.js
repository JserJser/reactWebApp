import React from 'react';
import ReactDOM from 'react-dom';




// create history
window.g_history = require('umi/_createHistory').default({
  basename: window.routerBase,
});

// render
function render() {
  ReactDOM.render(
    React.createElement(require('./router').default),
    document.getElementById('root'),
  );
}

const moduleBeforeRendererPromises = [];

Promise.all(moduleBeforeRendererPromises).then(() => {
  render();
}).catch((err) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(err);
  }
});



// hot module replacement
if (module.hot) {
  module.hot.accept('./router', () => {
    render();
  });
}
