SRE-Validator
==
A fullly tested, 100% covered validator for node --WIP

Installation
-
npm install --save sourcegr/SRE-Validator#master -- WIP


## Usage
Create a  validator with:
```javascript
const fields_to_test = {
    id: 3,
    age: 24,
    name: 'John doe'
}

const the_rules = [
    {id: 'numeric'},
    {age: 'numeric'},
    {age: {
        between: [1, 30]
    }},
    {name: 'required'},
];


const v = Validator.create(fields_to_test, the_rules);
const result = v.validate();
```

if `result` is true, congratulations. Otherwise, you should get the error with 

```javascript
v.getErrors();
```

## Rules
The rules should be an array of objects.

The key of each object, should be the name of the input you want to check against.
 
The value can be a string, an array of strings, or an object. Typically, strings and array of strings are used when there is no need for parameters.

```javascript
const rules = [
    {id: 'required'},
    {name: ['alphanum', 'required']}
];
```
 
Object rules are required when you want to pass parameters
```javascript
const rules = [
    {lastname: {minLength: 2}}, // name should be at least 2 chars
    {age: { between: [18, 99]}}   // age should be between 19 and 99 
];
``` 


Currently, the following rules exist

**Generic Rules**
- `'required'` - Check if the field exists


**Number Rules**
- `{between: [min, max, include_limits=true]}`    
Should be between the range min, max. To exclude the min/max values, set `include_limits` to `false`

- `{notBetween: [min, max, include_limits=true]}`  
The opposite of `between`

- `'positive'` / `{positive:true}`  
Positive number / Positive number but also allow zero

- `'negative'` / `{negative:true}`  
Negative number / Negative number but also allow zero



- `'nonZero'`  
number and not zero. 

- `integer` - WIP
- `lessThan` - WIP
- `moreThan` - WIP



**String Rules**
- `minLength` - String length should be less than this
- `maxLength` - WIP
- `exactLength` - WIP
- `startsWith` - WIP
- `endsWith` - WIP
- `contains` - WIP
- `alpha` - WIP
- `alphanum` - WIP
- `alphanumdash` - WIP
- `slug` - WIP
- `url` - WIP
- `email` - WIP
- `regexp` - WIP


The rules are added on demand. If you want a specific rule please add it yourself and help this lib grow.

Just clone the repo and fire away!



## License
MIT


