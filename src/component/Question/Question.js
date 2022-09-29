import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
           <div>
           <h1>How Does React Work</h1>
            <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces.ReactJS is an open-source, component-based front end library responsible only for the view layer of the application.React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible.React will efficiently update and render just the right component when your data changes.A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser's DOM.</p>
           </div>
           <div>
           <h1>Difference between props and state</h1>
            <p><span>PROPS :</span>Without props, React Component will stop making sense. A React component is a reusable component which can be used over and over again in the UI, but not always we are going to render the same component with same data. Sometimes we have to change the data or content inside a component. That's why props are introduced in React.  The Data is passed from one component to another.It is Immutable (cannot be modified).Props can be used with state and functional components.Props are read-only.</p>
            <p><span>STATE : A state in React Component is its own local state, the state cannot be accessed and modified outside the component and can only be used inside the component which is very similar to, you already guessed it a function own local scope. We can define variables inside the function which can only be used inside the function block scope. The Data is passed within the component only. It is Mutable ( can be modified). State can be used only with the state components/class component . State is both read and write.</span></p>
           </div>
           <div>
            <h1>How the useEffect Works</h1>
            <p>When we want to perform something after each render of component then we can use the useEffect(). By using this Hook, we tell React that our component needs to do something after render by passing a function. React remember the function we passed in useEffect() hook and call it later after performing the DOM updates.By default, the useEffect hook runs after the first render and after every update. React updates the DOM by the time it runs the effects. useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.</p>
            
           </div>
            
        </div>
    );
};

export default Question;