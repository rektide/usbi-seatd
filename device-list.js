function fetch(opts, cb) {
	if(typeof opts === 'function'){
		cb= opts
		opts= null
	}
	var dir = typeof opts == 'string' ? opts : opts && opts.dir || module.exports.busDir)
	require('fs').readdir(dir
}

function watch() {
	var fs = require('fs')
}

function DeviceList() {
	
}

var deviceDir = '/dev/bus/usb'

module.exports = DeviceList
