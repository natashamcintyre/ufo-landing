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


##Linting
Run
```
npx eslint <file>
```

ESLint has been configured to only warn instead of throwing errors.

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
[Animating a Canvas with React Hooks, Pete Corey](http://www.petecorey.com/blog/2019/08/19/animating-a-canvas-with-react-hooks/)
[Techniques for Animating on the Canvas in React, Phil Nash](https://philna.sh/blog/2018/09/27/techniques-for-animating-on-the-canvas-in-react/)
[React UseRef Hook](https://www.smashingmagazine.com/2020/11/react-useref-hook/)

## Linter
Install [ESLint](https://eslint.org/docs/user-guide/getting-started)

```
npm install eslint --save-dev
```
[Configure](https://eslint.org/docs/user-guide/getting-started#configuration) with
```
npx eslint --init
```
Run with
```
npx eslint .
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

Install [ESLint Plugin Only Warn](https://github.com/bfanger/eslint-plugin-only-warn)
```
npm install eslint-plugin-only-warn --save-dev
```
Add to .eslintrc:
```
{
    "plugins": [
        "only-warn"
    ]
}
```
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

Canvas needs scaling so that CSS pixels and actual pixel widths are in the correct ratio. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio)
