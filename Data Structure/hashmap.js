let hashmap = new Map([
    ["string1", { type: "object" }],
    ["string2", { name: "No matter content"}],
    ["test", "and type content"]
])
console.log('hashmap initialized;', hashmap)

console.log(".size // similar to arr.length", hashmap.size) 
console.log(".get('string1')", hashmap.get("string1")) // { type: 'object' }
console.log(".has('string1')", hashmap.has("string1")) // true

hashmap.delete("test")
console.log("After deleting test key", hashmap)

hashmap['string3'] = "wrong way to insert"
console.log('After wrong assignment the size is still the same (2)')
console.log(hashmap)
// Map(2) {string3: 'wrong way to insert', size: 2, string1 => {type: 'ob…ct'}, string2 => {name: 'No…nt'}}

hashmap.clear()
hashmap.set("string3", { type: "object" })
console.log('Cleared the hashmap and insert in the right way:')
console.log(hashmap) // Map(1) {string3: 'wrong way to insert', size: 1, string3 => {type: 'ob…ct'}}

delete hashmap['string3'] // To delete the wrong assignment
console.log(hashmap) // Map(1) {size: 1, string3 => {type: 'ob…ct'}}
