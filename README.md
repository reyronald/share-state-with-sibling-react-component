> NOTE: To explore this repo in CodeSandbox, remember to switch on the "Current Module View"
> in the top-right corner of the Preview window.

Consider the following component tree:

```js
<Parent>
  <ChildA>
  <ChildB>
  <ChildC>
  {/* ... other components */}
</Parent>
```

How would you go about sharing state from `ChildB` to `ChildA` ?
The commonly known pattern is to [lift state up, as described in the React official docs][lift].
That works OK for small cases but it doesn't scale well because the entire `<Parent>` tree will be
re-rendered too, including `<ChildC>` and any other components that have nothing to do with this transaction.

One thing that you could do to avoid this is to properly implement `shouldComponentUpdate` or 
`React.PureComponent`, see `./src/vanilla.js`. That will indeed prevent unnecessary re-renders, 
but not all the time  it is possible to go back and refactor the entire component tree to do this. 

The alternative approach would be to use some sort of state management library that can handle this for you.

In `./src/mini-store.js`, the `mini-store` npm package is used. It provides very similar API to Redux and 
allows you to connect & communicate only the necessary components without involving any others.
In this particular example, when `<ChildA>` triggers a change, only `<ChildB>` is re-rendered (as it should).

In `./src/unstated.js`, the `unstated` npm package is used. Here, the UI corresponding to `<ChildB>` will be updated,
__but no re-renders will occur, in any component (not even in `<ChildB>` itself)__. This is because of how differently
`unstated` works internally and handles DOM changes.

[lift]: https://reactjs.org/docs/lifting-state-up.html#lifting-state-up