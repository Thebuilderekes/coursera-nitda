try {
	console.log(a + b);

	throw new Error();
} catch (err) {
	console.log(err + " this is an error");
}

// try - catch block is used to handle errrors. It keeps a program running even when there is an error. The try block is used to write the code and the catch block is used to handle the error/ `Throw Error()` is another way to handle error
