# Data Miner

### Instalation
```
npm i @userforce/web-miner
```

### Usage example
```
import Miner from '@userforce/web-miner';

let result = await miner.scrape([
    {name: 'open', params: { value: "https://example.url/" }},
    {name: 'insert', params: { value: "text example", selector: ".css .elem-selector"" }},
    {name: 'click', params: { selector: ".css .elem-selector" }},
    {name: 'remember', params: { selector: ".css .elem-selector" }},
    {name: 'select', params: { selector: ".css .elem-selectorr", value: "option-value" }},
    {name: 'screenshot', params: { value: "/path/to/screenshot/name.png", selector: ".my-css-selector" }}
]);
```

### Rusult example

```
Results(8) [
    {
        action: Action { name: 'open', params: [Parameters] },
        result: 'https://ibmachine.com/'
    },
    {
        action: Action { name: 'insert', params: [Parameters] },
        result: 'test'
    },
    {
        action: Action { name: 'click', params: [Parameters] },
        result: 'https://ibmachine.com/'
    },
    {
        action: Action { name: 'remember', params: [Parameters] },
        result: 'FryeJacob'
    },
    {
        action: Action { name: 'select', params: [Parameters] },
        result: '1'
    },
    {
        action: Action { name: 'screenshot', params: [Parameters] },
        result: '/path/to/screenshot/name.png'
    },
]
```