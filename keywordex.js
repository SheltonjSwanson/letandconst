//var PI = 3.14;
//PI = 42; // stop me from doing this!


const PI = 3.14


//  you can't redeclare using the let keyword. let is block scoped 
// you can't redeclare using const keyword. const is block scoped
// you can reassign with let, but you can't redeclare or reassign with const
// its the way the javascrip compiler works.  Variable are lifting to the top of the scope they are declared in.  function declarations are also hoisted and can be invoked before they are defined in a codebase.