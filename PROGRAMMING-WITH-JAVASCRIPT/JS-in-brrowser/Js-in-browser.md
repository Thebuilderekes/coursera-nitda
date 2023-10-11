## Javascript modules

Why and history of common JS created by mozilla developer?

##DOM Manipulation and JS selectors

You can run docyment.querySelector(classname or id name or tag name) in the browser to check the content of an element

##Event Handling

##JSON history, why JSON?

It is often said that JSON is a subset of JavaScript, meaning it adheres to syntax rules of the JavaScript language,
but it's even more strict in how proper JSON code should be formatted. In other words, all JSON code is JavaScript, but not all JavaScript code is JSON.

Besides being a data interchange format, JSON is also a file format. It's not uncommon to access some third-party data
from a third-party website into our own code in the form of a json file.

convert JSON string to javascript object

```
let jsonStr = '{'greeting': 'hello'}'

const converted = JSON.parse(jsonStr)
console.log(converted)

// outputs a javascript object

{

greeting: 'hello'

}
```

convert javascript object to JSON
``
const person = {
name: "Ekeopre",
age = 32

}

const converted = JSON.Stringify(person)
``

It's important to remember that while plain JavaScript objects can hold functions, JSON strings cannot. Another limitation is that valid JSON doesn't allow the use of JavaScript comments. Also when you stringfy a JavaScript object containing a method, that method will be excluded from the stringfy operation. In this video you have learned how to convert a JSON string to a JavaScript object with the parse method. And how to convert a JavaScript object to a JSON string using the stringfy method. I..., marked from 0 hours 2 minutes 21 seconds until 0 hours 3 minutes 5 secondsIt's important to remember that while plain JavaScript objects can hold functions, JSON strings cannot. Another limitation is that valid JSON doesn't allow the use of JavaScript comments. Also when you stringfy a JavaScript object containing a method, that method will be excluded from the stringfy operation. In this video you have learned how to convert a JSON string to a JavaScript object with the parse method. And how to convert a JavaScript object to a JSON string using the stringfy method. I..
.
