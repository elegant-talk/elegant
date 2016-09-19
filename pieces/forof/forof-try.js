try {
	console.log('==> attempting es6 version <==')
	require('./forof-es6.js')
	console.log('==> used es6 version <==')
}
catch ( err ) {
	console.log('==> es6 version failed with error', err, '<==')
	console.log('==> falling back to es5 version <==')
	require('./forof-es5.js')
	console.log('==> used es5 version <==')
}
