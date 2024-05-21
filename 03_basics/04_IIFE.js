// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// ()() -> IIFE

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Rupali')