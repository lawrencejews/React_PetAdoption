# Pet Adoption with React-version-17
## Introduction to React
- Intro to Vanila javascript
- Installation of project tools and dependencies:`format-check for github actions, format-write for code development and  lint for CI $ CD pipelines`
## Core React Concepts
- Eslint Addition feature libraries for React, jsx for accessibility and import for logic across files.
- Rules for redundant react types and settings for the version of react.
- Hooks =  add statefulness in the application where data is rendered follow an order.
- Hooks should never be put in if statements or loops i.e protection pkg `eslint-plugin-react-hooks@4.3.0`
- Link tags help manage internal navigation `Switch tag were replaced by Routes tags`
- useParams can pull ids with the help of BrowserRouter 
- Class components `this` manages the instance i.e. the state however, hooks can only be used to wrap the Class.
- Config class properties with babel to leave out the constructor. 
- Event binding conversion from a string to a number 
```
handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,  
    });
  };

```