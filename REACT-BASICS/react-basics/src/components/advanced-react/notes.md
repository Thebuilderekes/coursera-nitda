
## Keys in React
- keys are identifiers to identify waht has been changed
- keys can be used to mirror IDs in database
- Keys must be unique.
- Keys must be chosen correctly else it will cause problems in your app. 



## FORMS

- form inputs must have autocomplete, id and name attributes
- e.preventDefault() to disable default behavior of the form that casues it refresh on each submit button click, 
should be used if you’d like to better control the submission of a form you’re creating for an app.

- be careful not to disable the button as this can harm acessibility, 


## contolled components working with forms

state delegation on forms is performes using `value` prop. the combination of local state
and `value` prop is needed to create a controlled component
other topics to look at are:
- onChange callback
- onSubmit callback

### example of controlled component
```
const Form = () => { 
 const [value, setValue] = useState(""); 

 const handleChange = (e) => { 
   setValue(e.target.value) 
 } 

 return ( 
   <form> 
     <input 
       value={value} 
       onChange={handleChange} 
       type="text" 
     /> 
   </form> 
 ); 
};

```


## unvontrolled component

Uncontrolled components are the simplest way to implement form inputs. There are certainly valued cases for them, especially when your form is straightforward. Unfortunately, they are not as powerful as their counterpart, so let's look at controlled inputs next.
handled by the dom itself and uses useRef hook
### example of uncontrolled component
``
const Form = () => { 
 const inputRef = useRef(null); 

 const handleSubmit = () => { 
   const inputValue = inputRef.current.value; 
   // Do something with the value 
 } 
 return ( 
   <form onSubmit={handleSubmit}> 
     <input ref={inputRef} type="text" /> 
   </form> 
 ); 
}; 
``

<"../../assets/Screenshot_2023-09-18_19-59-02.jpg"> 
