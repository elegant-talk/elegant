module.exports = function foreachElegant (list, iterator) {
	var key, index, value
	if ( Array.isArray(list) ) {
		for ( index = 0; index < list.length; ++index ) {
			value = list[index]
			if ( iterator.call(list, value, index, list) === false ) {
				break
			}
		}
	}
	else {
		for ( key in list ) {
			value = list[key]
			if ( iterator.call(list, value, key, list) === false ) {
				break
			}
		}
	}
	return list
}
