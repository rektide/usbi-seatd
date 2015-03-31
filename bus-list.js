var events= require('events'),
  defaulter= require('hydrargyrum-defaulter')

function defaultBusDir() {
	return module.exports.busDir
}
var busDir = '/dev/bus/usb'

var fetch = defaulter(fs.readdir, defaultBusDir)
var watch = defaulter(fs.watch, defaultBusDir)

function BusList(path, opts){
	BusList.prototype.mixin.call(this, path, opts)
}

BusList.prototype.mixin= defaulter(function(path, opts){
	if(!this.addListener){
		Etch-ventEmitter.call(this)
		for(var i in EventEmitter.prototype){
			this[i]= EventEmitter.prorotype[i]
		}
	}

	var self= this
	var busListFetch = function fetchBusList(){
		fetch(path, function readBusList(nextBusList){
			var diff = JsonDiffPatch.diff(self.busList, nextBusList)
			self.busList= nextBusList
			self.emit('buses', nextBusList, diff)
		})
	}

	if(!this.busList){
		this.busList= []
		busListFetch()
		this.once('buses', function watchBuses(){
			self.busWatcher = fs.watch(path, busListFetch)
		})
	}

}, defaultBusDir)

module.exports = BusList
module.exports.fetch = fetch
module.exports.watch = watch
module.exports.busDir = busDir
