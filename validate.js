module.exports = rules => fields => {
	const identity = {}
	let errors = identity

	for (const name in rules) {
		let value = fields[name]
		let ruleset = rules[name]
		if (ruleset != null) {
			if (!Array.isArray(ruleset)) {
				ruleset = [ruleset]
			}
			for (const rule of ruleset) {
				const err = rule(value)
				if (!!err) {
					errors = Object.assign({}, errors, { [name]: err })
					break
				}
			}
		}
	}

	if (errors === identity) {
		return null
	} else {
		return errors
	}
}
