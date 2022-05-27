const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed)
  ]);
}

const App = () => {
  return React.createElement("div", {}, [
    
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: 'Pepper',
      animal: 'bird',
      breed: 'Sun'
    }),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'Dog',
      breed: 'Havanese'
    }),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'Cat',
      breed: 'Silver'
    }),
  ]);
}
ReactDOM.render(React.createElement(App), document.getElementById('root'));