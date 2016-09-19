module.exports = function foreachElegant (list, iterator) {
	if ( Array.isArray(list) ) {
		for ( let index = 0; index < list.length; ++index ) {
			const value = list[index]
			if ( iterator.call(list, value, index, list) === false ) {
				break
			}
		}
	}
	else {
		for ( const key of Object.keys(list) ) {
			const value = list[key]
			if ( iterator.call(list, value, key, list) === false ) {
				break
			}
		}
	}
	return list
}
