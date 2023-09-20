# React notes

## Types of Data in React

There are two types of data in React. States data and Props data.
State data is data that is used within a component that it controls and can mutatewhile props data is data that is used outside a component.

## Hooks in React

Hooks are usee to peovide readability and simplicity in code. They allow you to manipulate data withing components

## Key points about State

- Never change the value of states of props in the children component as they are immutable

## react router dom setup steps

- Import route, Link and routes from react-router-dom
- Use Link to ="../pathtopage" for each link in between nav elements
- wrap Route in routes in navigation component
- Wrap App component in roots with browser-router elemnent and import browser router in root.

## using assets in React

Store the assets you dont particularly need for page load in the public folder. Store assets you needs such as images, fonts css and javascript files when your page loads in your assets folder, a child folder to the src folder.

## Loading assets and npm package use in react

### How to decide the right npm package fro your project

- check the number of downloads and how recently it was updated on npmjs.org
- check the github page to see how recently it was updated
- check the number of github stars available on the project. The higher the better

- use https://www.npmjs.com/package/react-player for loading video in react project
  you can add attributes to determine what happens to the video. check the documentation to find out more.

````
const App = () => {
  return (
    <div>
      <MyVideo />
    </div>
  );
};

const MyVideo = () => {
  return (
    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
  );
};

export default App;

```

## Bundling in React

All the imported files in a project might have their own imported files, and even those might have their imports.

This means that depending on other files, all of these files can create a dependency graph. The order in which all these files are loading is essential. That dependency graph can get so complex that it becomes almost impossible for a human to structure a complex project and bundle all those dependencies properly.

This is the reason you need tools like webpack.

So, webpack builds a dependency graph and bundles modules into one or more files that a browser can consume.

While it is doing that, it also does the following:

- It converts modern JS code - which can only be understood by modern browsers - into older versions of JavaScript so that older browsers can understand your code. This process is known as transpiling. For example, you can transpile ES7 code to ES5 code using webpack.

- It optimizes your code to load as quickly as possible when a user visits your web pages.

- It can process your SCSS code into the regular CSS, which browsers can understand.

- It can build source maps of the bundle's building blocks

- It can produce various kinds of files based on rules and templates. This includes HTML files, among others.
````
