/* @flow */
module.exports = function foreachElegant (list /* :Array<mixed>|{[key:string]:mixed} */, iterator /* :function */ ) {
	if ( Array.isArray(list) ) {
		for ( let index = 0; index < list.length; ++index ) {
			const value = list[index]
			if ( iterator.call(list, value, index, list) === false ) {
				break
			}
		}
	}
	else {
		const keys = Object.keys(list)
		for ( let index = 0; index < keys.length; ++index ) {
			const key = keys[index]
			const value = list[key]
			if ( iterator.call(list, value, key, list) === false ) {
				break
			}
		}
	}
	return list
}
