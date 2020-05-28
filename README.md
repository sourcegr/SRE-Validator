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

_WARNING ON NUMBER RULES_

The lib does no checks whatsoever if the input is a number before running any of the checks bellow. If you want to make a check, please include the `isNumber` check BEFORE any other checks.

 
- `{between: [min, max, include_limits=true]}`    
Between the range defined by `min`, `max`. To exclude the min/max values, set `include_limits` to `false`

- `{notBetween: [min, max, include_limits=true]}`  
The opposite of `between`

- `'positive'` / `{positive:true}`  
Positive number / Positive number but also allow zero

- `'negative'` / `{negative:true}`  
Negative number / Negative number but also allow zero

- `'nonZero'`  
Number and not zero. 

- `{lessThan:number}` / `{lessThan:[number, true]}` /   
Less than `number` / less than or equal to `number`
  
- `{moreThan:number}` / `{moreThan:[number, true]}` /   
More than `number` / more than or equal to `number`

- `{lessThanOrEqual:number}`   
Less than or equal to `number`
  
- `{moreThanOrEqual:number}`   
More than or equal to `number`
  

- `integer` - WIP


**String Rules**
- `{minLength: number}` / `{minLength:[number, true]}`  
length should be more  / more than or equal to `number`

- `{maxLength: number}` / `{maxLength:[number, true]}`  
length should be less  / less than or equal to `number`

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


