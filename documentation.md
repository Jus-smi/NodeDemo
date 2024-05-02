## Introduction

Catscript is a simple scripting langauge.  Here is an example:

```
var x = "foo"
print(x)
```

## Statements

&nbsp; &nbsp; &nbsp; &nbsp; Catscript offers many very powerful statements that are common in most languages you might know! There are too many to cover in one part so first I’ll cover print, for, if, variable, and assignment statements. Catscript supports boolean, string, integer, object, and even a lists containing any of these. These can be used anywhere in Catscript where you need a type and they are always preceded by a colon. In Catscript print statements take any expression and print the result to the console. Print statements support any of the available types within Catscript. The next statement it offers are for statements. These statements take any list of items and iterate over them. On each iteration the identifier specified points to the next item in the list. The body of the for statement can hold any number of other statements you wish. As you can imagine this can be very powerful. Following the for statement is the if statement. The if statement evaluates a boolean expression and if it’s true it will run the code in the body. Otherwise it will fall through and run the code in the else statement. If there is an if following the else statement then it will check the next condition and if the condition is true execute that code. If there is no else statement and the boolean expression is false then the code will skip the if’s body and continue as if it was not there. The next statement is the variable statement. Catscript also gives the user the ability to specify what type the variable’s type is. If the type is not specified the created variable will infer the type from the right hand side. If the type is specified but does not match the right hand side. This is an error. This statement assigns a value to an identifier. In this way we can save any number of variables for future use. Variable statements support all types available in Catscript and their type cannot be changed once they are created. Assignment statements are a way to change what is held in a variable statement. When assigning a new value to the variable the new value’s type must match the type that was used when creating the variable or be assignable to that type. This means that if you declared the original variable as an integer the new value must be an integer or a type that is assignable to an integer such as an object. Null expressions are assignable to everything whereas everything is assignable to an object type in Catscript. All other types in Catscript cannot be assigned to each other. That’s about it for the basic statements.

&nbsp; &nbsp; &nbsp; &nbsp; Next I’ll cover function definition, return, and function call statements. The function definition statements make code re-usability very simple in Catscript. A function definition is composed of an identifier. This acts as a name for the function. Arguments that belong to the function. These are enclosed in parentheses within the function’s declaration after the name. These act as variables for the function. These variables can only be used within the function’s scope and each, much like variable statements, can be assigned any type available in Catscript. A return type for the function. This is signified by a type outside the parentheses. This type acts as the type for the result of the function. If this type is not specified, the function’s type will default to void, which is a special type exclusively for a function’s return type. If the function has void for it’s return type you do not have to use a return statement within the function’s body. If you choose to, or you want to terminate execution early within the function. You can add a return statement without an expression following it. Finally the functions body will contain every line of code you want to execute within that particular function. The next and final statement are function call statements. This statement is made up of the identifier associated with the function’s declaration and arguments that match the arguments within the function’s declaration. The function call will pass in these arguments to the function and run the code that we put in the function’s declaration. That’s about it for statements, thanks for reading, I hope you learned something and will consider using Catscript on your future projects! Here are some statement examples.

### For Loops

```
for(x in [1, 2, 3]) {
	print(x)
}
```

Behavior:

This will print 123 to the console

### If Statement

```
if(true) {
	print(“This is true!”)
} else if(1 < 5) {
	print(“This is false!”)
} else {
	print(“It is bigger!”)
}
```

Behavior:

prints this is true! if true is true.

prints this is false! if 1 is less than 5 and true is not true.

prints It is bigger if 1 is not less than 5 and true is not true.

### Variable Statement

```
var x : int = 0
var str = “I’m a string”
var y : list<bool> = [true, false, true]
```

Behavior:

Instanciates a string with the value "I'm a string", an integer with the value 0, and a list containing booleans with the value true, false, true.

### Assignment Statement

```
x = 1
```

Behavior:

This changes the value to 1 for the variable x.

### Function Definition

```
function foo(a : int, b : int, c) : int {
	int result = a + b

	return result
}
```

```
function bar(d : string) {
	print(d)
}
```

Behavior:

When the function foo is defined the arguments a and b will have integer types. The return type will be an integer.

When the function bar is defined the arguments d will have the type string. The return type will be void.

### Function Call

```
foo(1, 2, true)
bar(“foo ” + “bar”)
```

Behavior:

When the function foo is called it will instanciate a new integer called result. It will add a and b and put that result in the variable result and return it.

When the function bar is called it will pass in the value "foo bar" and the function will print out foo bar and it will return nothing at the end of the function.

## Expressions

&nbsp; &nbsp; &nbsp; &nbsp; Catscript offers many of the common expressions that are available in most programming languages. These are equality, comparison, additive, factor, unary, and primary expressions. Equality and comparison expressions are used to check equality of variables, if variables are less than each other, if variables are less than or equal to each other, if variables are greater than each other, or even if variables are less than or equal to each other. These operations are both left associative. On the other hand additive and factor expressions are used to do mathematical operations on variables. The additive expression adds the left hand side to the right hand side and returns the result. Catscript can also subtract or even add negative numbers together. In Catscript the additive expressions also support the ability to concatenate two strings together. Factor expressions will either multiply the right hand side by the left hand side or divide them depending on if a * or / is used. Just like comparison and equality expressions additive and factor expressions are also left associative. Unary expressions are used to negate a value. In additive and factor expressions this involves making positive values negative and negative values positive. Whereas in equality and comparison expressions it will switch the result from true to false if the result was true or from false to true if the result was false. Finally primary expressions are any single token expression. This can be an identifier which is simply a name that is assigned to any variable. A string, this is a string of characters or numbers that is surrounded by quotes. An integer which is a number without decimal points. A boolean this can either hold the value true or false. Null this represents the absence of any value. A list literal, this is comprised of any type of variable surrounded with square brackets. Any expression can also be parenthesized in Catscript. This changes the associativity of any expression. That’s about it for expressions here are some examples.

### Equality Expression

```
5 != 2 == 2
2 != 3
```

Value:

```
5 != 2 == 2 is false
2 != 3 is true
```

### Comparison Expression

```
5 < 6
7 <= 10
4 > 120
140 >= 20
```

Value:

```
5 < 6 is true
7 <= 10 is false
4 > 20 is false
140 >= 20 is true
```

### Additive Expression

```
5 + 6
2 - 1
-2 + 4
“foo ” + “bar”
```

Value:

```
5 + 6 is 11
2 - 1 is 1
-2 + 4 is 2
"foo " + "bar" is "foo bar"
```

### Factor Expression

```
8 * 5
4 / 2
```

Value:

```
8 * 5 is 40
4 / 2 is 2
```

### Unary Expression

```
--4
not true
```

Value:

```
--4 is 4
not true is false
```

### Primary Expression

```
4 + 5 + (6 - 3)
[“foo”, “bar”]
```

Value:

```
4 + 5 + (6 - 3) is 9 + 3 is 12
["foo", "bar"] is a list holding the strings foo and bar
```
