const questions = [
    {question: 'Explain event delegation.', status: true},
    {question: 'Explain how <span class="tag is-dark is-large">this</span> works in JavaScript. Can you give an example of one of the ways that working with this has changed in ES6?', status: false},
    {question: 'Explain how prototypal inheritance works.', status: false},
    {question: `What's the difference between a variable that is: <span class="tag is-dark is-large">null</span> , <span class="tag is-dark is-large">undefined</span> or undeclared?
    How would you go about checking for any of these states?`, status: true},
    {question: 'What is a closure, and how/why would you use one?', status: false},
    {question: 'What language constructions do you use for iterating over object properties and array items?', status: true},
    {question: 'Can you describe the main difference between the <span class="tag is-dark is-large">Array.forEach()</span> loop and <span class="tag is-dark is-large">Array.map()</span> methods and why you would pick one versus the other?', status: true},
    {question: `What's a typical use case for anonymous functions?`, status: false},
    {question: `What's the difference between host objects and native objects?`, status: false},
    {question: 'Explain the difference between: <span class="tag is-dark is-large">function Person(){}</span> , <span class="tag is-dark is-large">var person = Person()</span> , and <span class="tag is-dark is-large">var person = new Person()</span> ?', status: true},
    {question: 'Explain the differences on the usage of <span class="tag is-dark is-large">foo</span> between <span class="tag is-dark is-large">function foo() {}</span> and <span class="tag is-dark is-large">var foo = function() {}</span>', status: true},
    {question: `Can you explain what <span class="tag is-dark is-large">Function.call</span> and <span class="tag is-dark is-large">Function.apply</span> do? What's the notable difference between the two?`, status: true},
    {question: 'Explain <span class="tag is-dark is-large">Function.prototype.bind</span>.', status: false},
    {question: `What's the difference between feature detection, feature inference, and using the UA string?`, status: false},
    {question: 'Explain "hoisting".', status: true},
    {question: 'Describe event bubbling.', status: false},
    {question: 'Describe event capturing.', status: false},
    {question: `What's the difference between an "attribute" and a "property".`, status: true},
    {question: 'What are the pros and cons of extending built-in JavaScript objects?', status: false},
    {question: 'What is the difference between <span class="tag is-dark is-large">==</span> and <span class="tag is-dark is-large">===</span> ?', status: true},
    {question: 'Explain the same-origin policy with regards to JavaScript.', status: false},
    {question: 'Why is it called a Ternary operator, what does the word "Ternary" indicate?', status: true},
    {question: 'What is strict mode? What are some of the advantages/disadvantages of using it?', status: false},
    {question: 'What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?', status: false},
    {question: 'What tools and techniques do you use debugging JavaScript code?', status: false},
    {question: 'Explain the difference between mutable and immutable objects. What is an example of an immutable object in JavaScript? What are the pros and cons of immutability? How can you achieve immutability in your own code?', status: false},
    {question: 'Explain the difference between synchronous and asynchronous functions.', status: false},
    {question: 'What is event loop? What is the difference between call stack and task queue?', status: false},
    {question: 'What are the differences between variables created using <span class="tag is-dark is-large">let</span>, <span class="tag is-dark is-large">var</span> or <span class="tag is-dark is-large">const</span> ?', status: true},
];