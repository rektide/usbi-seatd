var BusList= require('./bus-list'),
  SeatList= require('./seat-list'),
  Www= require('./www')

function bootstrap(){
	var busList= BusList(),
	  seatList= SeatList(),
	  www = Www({
		busList: busList,
		seatList: seatList,
		www: www,
		start: true
	  })
}

module.exports = bootstrap
if(require.main == module){
	bootstrap()
}
