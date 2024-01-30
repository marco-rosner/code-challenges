// IIFE - Immediately Invoked Function Expression
(function foo(){
    console.log('foo')
})() // foo

function bar() {
    console.log('bar')
}

const baz = () => console.log('baz')

bar() // bar
baz() // baz
foo() // ReferenceError