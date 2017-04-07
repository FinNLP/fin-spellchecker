# Fin-spellchecker

Type detection and correction.


## Installation

```
npm i --save fin-spellchecker
```

## Usage

```typescript
import * as Fin from "finnlp";
// import the spellchecker
import {build} from "fin-spellchecker";
// import dictionary
import {dictionary} from "spelt-gb-dict";
// visit: https://github.com/alexcorvi/spelt for more
// build the dictionary
build(dictionary);

// create a new instance
const instance = new Fin.Run("I saw thier books");
console.log(instance.spellchecker());

```

The above example will give you:

```javascript
[
    [
        {
            raw:"I",
            correct:true,
            corrections:[],
        },
        {
            raw:"saw",
            correct:true,
            corrections:[],
        },
        {
            raw:"thier",
            correct:false,
            corrections:[
                {
                    correction:"their",
                    distance:0.2
                },
                // ... other possible corrections
            ],
        },
        {
            raw:"books",
            correct:true,
            corrections:[],
        }
    ]
]
```