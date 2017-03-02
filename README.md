# Validate

## install

`yarn add @commander-lol/validate`

## usage

```js

import Validate from '@commander-lol/validate'

const validator = Validate({
	name: name => !name && 'Required',
	mobile: [
		mobile => !mobile && 'Required',
		mobile => !isNaN(Number(mobile)) ? null : 'Must be a valid number',
	],
})

const errors = validator({ name: 'Hugo', mobile: '0555123444' })

if (errors) {
	for (let error in errors) {
		console.log(error, errors[error])
	}
} else {
	console.log('No errors!')
}
```
