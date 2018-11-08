console.log('app.js is running!')

// let template = '<p>This is JSX from app.js</p>';
let template = React.createElement(
  'h1',
  {id:'someid'},
  'get this thing working!'
)

let appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);