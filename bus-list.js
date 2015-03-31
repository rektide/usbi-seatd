var defaulter= require('hydrargyrum-defaulter')

function defaultBusDir() {
	return module.exports.busDi
}
var busDir = '/dev/bus/usb'

var fetch = defaulter(fs.readdir, defaultBusDir)
var watch = defaulter(fs.watch, defaultBusDir)

function BusList(path, options){
}

module.exports = BusList
module.exports.fetch = fetch
module.exports.watch = watch
module.exports.busDir = busDir
