const Validate = require('./validate')

const validator = Validate({
	name: name => !name && 'Required',
	mobile: [
		mobile => !mobile && 'Required',
		mobile => !isNaN(Number(mobile)) ? null : 'Must be a number'
	],
})

let errors = validator({ name: 'hugo', mobile: '1234111' })
errors ? console.log(errors) : console.log('No errors')

errors = validator({ mobile: '1234111' })
errors ? console.log(errors) : console.log('No errors')

errors = validator({ name: 'hugo', otherfield: '1234111' })
errors ? console.log(errors) : console.log('No errors')
