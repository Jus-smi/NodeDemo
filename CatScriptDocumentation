**CatScript Documentation**

**General Information:** CatScript is statically typed programming language with a simple type system, that has 6 types, int (32 bit Integer), string (a set of characters), bool(true/false), list&lt;x&gt;(a list of type x), null, and object(any type of value). The types of all variables and functions are known at compile time. CatScript has built-in functionality such as variables, variable assignments, print statements, if statements, for loops, simple mathematical expressions, comparison expressions, equality expressions, and functions.

**Types:**

Int - This is a 32-bit integer that can store any number between the values 2,147,483,647 and -2,147,483,648.

Bool - This type is a Boolean value, and variables of this type can be set to true or false.

List - A list can be used to store a collection of other types. But lists can not be modified after being created.

Null - This is just a null value indicating the absence of a value in a variable.

String - This type is a collection of characters such as “random string” or “abc123”.

Object - This type can be assigned the other types. An example would be Object obj = “random value”. That Object obj now stores a string value. You could also say Object obj2 = 123. Object obj2 stores an integer value of 123. Objects cannot be assigned to other types. You can not do String str = obj.

**Functionality:**

**Variables** – Variables can be declared using either of the following formats. First, you use the keyword Var followed by the identifier/name and then an optional semicolon with a type and then an equal sign followed with the value you want to be assigned to the variable.

Var x = 10 Or Var y : list&lt;int&gt; = \[1,2,3\]

The first format assumes the variables type based on the value provided, the second declaration method has an explicit type where you tell it what the type is. The variables in cat script are stored and can be called later in the same scope to use the assigned value.

**Assignment** – You can also assign values to variables using the following format.

X = 20

This allows you to change the value that a given variable points to. A couple of important things to note with assignment variables is that the type of the expression that you are assigning to the variable needs to match with the variable's expected type. The variable also needs to be declared in the scope in which you are assigning the value.

**Unary Expressions** – Unary expressions are used to get the inverse of whatever follows. To use a unary expression, you can put a – before a number to get the negative number. You can also use the Not keyword to get the inverse of a boolean. The Not can also be used before an expression of function that produces a bool to inverse the output. Below are a few examples of unary expressions.

\-1 or -4

Not true of Not (10<9)

**Parenthesized Expressions** – Parenthesized expressions are used to enforce a priority in the execution of the stuff inside of the parentheses. It can be used to enforce correct mathematical execution or to apply expressions to other expressions as shown below.

7 \* (8 + 9)

Not (8<9)

**Factor Expressions** – Factor expressions are used by using the multiplication symbol or the division symbol between two integers, as shown below.

10 \* 7 OR 90/10

The first example would result in 70 or 10 multiplied by 7 and the second example would result in 9 or 90 divided by 10.

**Identifier Expression** – Identifier expressions represent the names assigned to variables or functions that are declared in a program. Below is an example where variableName is the identifier.

String variableName = “var”

**Additive Expression** – Additive expressions use the addition and subtraction sign. The addition symbol can be used to add two integers together or can also be used to concatenate a string to another value. Below is an example of mathematical addition usage

9 + 8

This would result in a value of 17, you can also use the addition operator to concatenate a string to another value as shown below.

“string “ + 123

This would result in the String value of “string 123”. The subtraction operator is only use to subtract the second integer from the first as shown below.

17 – 9

This would result in the integer 8.

**Print Statements** – In Catscript you can print values out to the console using print. This built-in functionality allows you to print out the string value of what is in the parentheses following the print keyword. Below are a couple of examples of the use of print in catscript.

Print(1)

Print(“this string value”)

**Comparisons Expressions** – In CatScript there is built in comparison and equality tools that evaluates to true or false depending on the values used. Using comparison expressions allows two integers to be compared and produce a boolean result. Built in comparisons are greater than, less than, less than or equal to and greater than or equal to. Shown below is how to use each comparison.

Greater Than : 8 > 9 - Evaluates to true

Less Than : 9 < 8 - Evaluates to false

Greater Than or Equal to : 8 >= 9 - Evaluates to false

Less Than or Equal to : 8 <= 9 - Evaluates to true

**Equality Expressions** – For equality expressions, you can compare values of different or the same type to check if two values are equal or not equal. Shown below is how to use equals and not equals.

Equal - 8 == true - Evaluates to false

Not Equal - 8 != 9 - Evaluates to true

**If Statements** – CatScript has built-in if statements which allows you to have conditional execution. You provide an expression that will be evaluated as true or false. If the expression evaluates to true, then the Statements within the if are executed other wise they are not executed. The implementation of the if is shown below.

If(x = 10){statements}

After an if statement you can optionally use an else which will execute the statements in the else if the expression evaluates to false. The implementation of if-else is shown below.

if(x == 10){statements}

else{statements}

**For Loops** – Built in for loops allow you to iterate over every value in a list and execute a set of statements for every value in a list. When using a for loop there is a temporary variable that while in the for loop you can use that variable to access the current value from the list, in the example provided the x points to the current value in the list. The example below shows how to use a for loop.

for(x in \[1,2,3\]) { statements }

Something to note with for loops is while in for loop you have access to the variables that are available in the scope where the for was used, but within a for loop you can declare a new variable that can only be used within that loop and the new variable will not be usable outside of the loop.

**Functions** – Functions must be declared and then called. In CatScript a function declaration must start with the function keyword and then be followed by what you want to name the function. After the name, there must be a set of parentheses where you put all of the needed argument declarations. After the parentheses there is the option to put a semicolon followed by a return type, if you put a return type here the function must have a return statement to return something of the specified type. Then there are the brackets that will contain all of the statements/functionality for the function. Below is an example of a function declaration.

function foo(x) { print x }

Similar to in for loop, while inside of a function you can use variables that are declared in the same scope as the function, while also being able to declare new variables within the function that will be unusable after the function finishes execution. So if you want to keep values calculated in a function they should be returned.

**Function Calls** – To call a function you need to use the function name followed by parentheses that contain the values that you want to pass into the function. It is important to note that the values you put in the parentheses must match the order and type, if specified, of arguments that are in the function declaration. This is useful for running the same code on multiple different values and avoids having multiple instances of the same code. Below is a function call for the function declared above.

foo(“this is the value”)

**Return Statements:** Return statements are used at the end of a function to end the function and return a value if specified. If a function does not have a return parameter specified, a return can still be used in an if to end the function and not finish the rest of the statements. A return is also used to specify what value to return if the function has a return type specified in the declaration. Below is an example of a function with a return.

Declaration: function foo(x) : String { return “this is “ + x }

Function Call : String str = foo(“a sentence.”)

The function call sets str to be “this is a sentence” because the function returned the string that was concatenated.
