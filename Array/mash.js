const mash = (arr) =>
    arr.reduce((acc, item) => Object.assign(acc, {[item]: item.length}), {})

// {functional: 10, programming: 11, rules: 5}
console.log(mash(['functional', 'programming', 'rules']))
