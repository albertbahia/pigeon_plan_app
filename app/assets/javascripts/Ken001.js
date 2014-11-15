  (function () {
	
	var today = new Date();
	var selectedDate = today;
	/*var incrementDate = today;*/
	var timeNow;
	var selectedTime;
	
	var selectedDateTime;
	
	var inputDate;
	
	var $date = $('#InputDate');     // Date Input
	var $backDate = $('.icon-backwards');
	var $forwardDate = $('.icon-forwards');
	
	var $time = $("#InputTime");
	var $backTime = $(".icon-back");
	var $forwardTime = $(".icon-next");
	
	// Create the date picker using jQuery UI
	  
/*	
	function dateFormat(inputDate) {
		var day, date, month, year, dayNames, monthNames;
		var fullDate;
		var fullDateHolder;
	
		dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		day = dayNames[inputDate.getDay()];
		date = inputDate.getDate();
		month = monthNames[inputDate.getMonth()];
		year = inputDate.getFullYear();
		
		fullDate= day + ', ' + date + ' ' + month + ', ' + year;
		
		return fullDate
	}
	
	function updateDate(date) {
		inputDate=dateFormat(date);
		$date.val(inputDate);
	}
	
	updateDate(selectedDate);
	 
	
	$date.datepicker({
		dateFormat: 'DD, d MM, yy',
		minDate: new Date(),
		onSelect: function(){ 
			selectedDate = $(this).datepicker('getDate'); 
			alert("yo mama");
		}	
	});
*/


	$date.pickadate({
		onStart: function(){
			this.set('select', [selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()]),
			selectedDate=this.get('select').obj
		},
		onSet: function() {
			selectedDate=this.get('select').obj,
			selectedDateTime=Date.UTC(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()),
			console.log("selectedDate =" + selectedDate),
			/*console.log("this.get('select')=" + Date.UTC(this.get('select').year, this.get('select').month, this.get('select').day))
			*/
			console.log("selectedDateTime =" + selectedDateTime),
			console.log("selectedDateTime.getMonth() =" + selectedDateTime.getDateUTC())
		},
		format: 'dddd, d mmmm, yyyy',
		min: today,
		clear: '',
		close: 'Cancel'
	});

	$backDate.on('click', function(){
		if (selectedDate > today){
			selectedDate.setDate(selectedDate.getDate()-1),
			$date.pickadate('picker').set('select', [selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()])
		} else {
			alert("You can't go back in time!")
		}
	});
	
	$forwardDate.on('click', function(){
		selectedDate.setDate(selectedDate.getDate()+1), 
		$date.pickadate('picker').set('select', [selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()])
	});

	$time.pickatime({
	/*
		formatLabel: function(time) {
			var tes = this.get('now').pick;
			var hours = ( time.pick - tes) / 60,
				label = hours < 0 ? ' !hours to now' : hours > 0 ? ' !hours from now' : 'now'
			return  'h:i a <sm!all>' + ( hours ? Math.abs(hours) : '' ) + label +'</sm!all>'
		},
	*/	
		onStart: function(){
			this.set('select', true),
			timeNow=(this.get('select')),
			selectedTime=timeNow
		}, 
		
		onSet: function(){
			selectedTime=(this.get('select'))
		},
		
		min: today,
		interval: 1,
		clear: '',
		close: 'Cancel'
		
	});
	
	$backTime.on('click', function(){
	
		if (selectedDate > today && selectedTime.pick-60 > timeNow.pick){
			selectedTime=(selectedTime.pick-60),
			$time.pickatime('picker').set('select', selectedTime)
		} else {
			alert("You can't go back in time!"),
			console.log("Selected Date = " + selectedDate),
			console.log("Today's Date = " + today),
			console.log("Selected Time = " + selectedTime.pick),
			console.log("Time Now = " + timeNow.pick)
		}

		
	/*	if (selectedTime-60 > timeNow){
			selectedTime.set(selectedTime.pick()-60),*/
			/*$time.pickatime('picker').set('select', [selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()])*/
		
		/*} else {
			alert("You can't go back in time!")
		}*/
		
	});
	
	$forwardTime.on('click', function(){
	/*
		selectedDate.setDate(selectedDate.getDate()+1), 
		$date.pickadate('picker').set('select', [selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()])
	*/
	selectedTime=(selectedTime.pick+60),
	$time.pickatime('picker').set('select', selectedTime)
	});
	
	
	$( ".TimeArrow" ).hover(
	   function(){  
		  $(this).stop().fadeTo('fast', 1);  
	   },  
	   function(){  
		  $(this).stop().fadeTo('fast', 0.3);  
	   }
	); 

	

	
	
	
	alert("JS activated");
	
	
	
	
	
	
	
	
	
	
  }());