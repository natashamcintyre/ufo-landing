# UFO Landing Animation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Documentation [here]().

## Tests
```
npm test
```
To get [test coverage](https://create-react-app.dev/docs/running-tests/#coverage-reporting), run
```
npm test -- --coverage
```
Coverage configured using [create-react-app documentation](https://create-react-app.dev/docs/running-tests/#coverage-reporting)
## Specification
### Animate a UFO landing
**Must include:**
- A sky
- A ground
- A UFO that starts in the sky and lands on the ground

**Consider:**
- The detail of the sky.
- The detail of the ground.
- The movement of the UFO.

Be as creative as you can.
### Tech requirements:
- The app must be deployed.
- The app must be built in react and use react’s state management.
- The canvas should be 800px by 450px.
- Must not include any bitmaps (images) - everything included should be created in js and css.



# To go in the Wiki

## Building the canvas
I found these resources helpful:
[Animating a Canvas with React Hooks](http://www.petecorey.com/blog/2019/08/19/animating-a-canvas-with-react-hooks/)

## Linter
Install [ESLint](https://eslint.org/docs/user-guide/getting-started)

```
npm install eslint --save-dev
```
[Configure](https://eslint.org/docs/user-guide/getting-started#configuration) with
```
npx eslint --init
```

Install [ESLint React Hook plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks)
```
npm install eslint-plugin-react-hooks --save-dev
```
Then extend the recommended eslint config:
```
{
  "extends": [
    // ...
    "plugin:react-hooks/recommended"
  ]
}
```
For more config options, see [custom configuration](https://www.npmjs.com/package/eslint-plugin-react-hooks#custom-configuration)

## Research

### Testing frameworks
Jest - intended for unit tests of components and logic, not DOM
Cypress - end to end testing

Potential things to use.
* [React hooks](https://reactjs.org/docs/hooks-overview.html)
  - useState() - allows state in function components as opposed to class components,
  - useEffect() - tells React to do something after rendering / updating the DOM. eg componentDidMount
  -

> Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
> Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks. We’ll learn about them in a moment.)

Use this linter to enforce these rules.
  https://www.npmjs.com/package/eslint-plugin-react-hooks
