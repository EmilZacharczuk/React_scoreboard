const title = 'My first React Element'
const desc = 'I just learnt how to create a React Node and reneder to the DOM'

const header = (
    <header>
      <h1>{title}</h1>
      <p>{desc}</p>
    </header>

);
ReactDOM.render(
  header,
  document.getElementById('root')
);
