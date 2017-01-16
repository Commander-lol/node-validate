module.exports = rules => fields => {
	const identity = {}
	let errors = identity

	for (const [field, value] of Object.entries(fields)) {
		let ruleset = rules[field]
		if (ruleset != null) {
			if (!Array.isArray(ruleset)) {
				ruleset = [ruleset]
			}
			for (const rule of ruleset) {
				const err = rule(value)
				if (err != null) {
					errors = Object.assign({}, errors, { [field]: err })
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
