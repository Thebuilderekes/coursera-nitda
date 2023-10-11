### Difference between for of and for in loop

for of loops over the objects own properties while for in loops over objects properties and
it's prototypes.

- For of loops are more reliable to use.
  DONT USE FOR IN LOOPS

### spread operator

- You can use spread operator to join a group of arrays or a group of objects and have all the properties of one object stop and continue with the properties of another object
  e.g

in the case of arrays

```
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array ['apple', 'pear', 'plum', 'blueberry', 'strawberry']

```

In the case of objects:

```
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}
```

Add new members to arrays without using the push() method
Here's how to use the spread operator to easily add one or more members to an existing array:

```
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);   output// ['onion', 'parsley', 'carrot', 'beetroot']

```
