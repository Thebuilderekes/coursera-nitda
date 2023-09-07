## Error Handling

An error can be defined as a faulty peiecs of code that can be thrown to cause a program to stop

try-catch block is used to handle errrors. It keeps a program running even when there is an error. The try block is used to write the code and the catch block is used to handle the error/ `Throw Error()` is another way to handle error

```
try {

//line of code that will cause

throw new Error()

}

catch(err){

console.log(err)
}
```

Types of errors

- Syntax error - This ocurs when javascript cannot read the code
- Reference error - This happns when a variable that does not exist is trying to be accessed
- TypeError - A TypeError is thrown when, for example, trying to run a method on a non-supported data type.

/\*TODO: revisit the error prevention exercise on coursera week 2, revisit defensive javascript and error handling techniques
