  $(document).ready(function () {
	
	var todayLocal = new Date();
	var todayUTC=  todayLocal.getTime()

	var selectedDate;
	var selectedTime;
	
	var timeHolder = new Date();
	
	var $date = $('#InputDate');     // Date Input
	var $backDate = $('.icon-backwards');
	var $forwardDate = $('.icon-forwards');
	
	var $time = $("#InputTime");
	var $backTime = $(".icon-back");
	var $forwardTime = $(".icon-next");
/*==================================================*/

	
/*DATE==================================================*/
	$date.pickadate({
	
		onStart: function(){
			this.set('select', (todayLocal)),
			selectedDate=this.get('select').obj,
			selectedDateTime=toUTC(selectedDate, selectedTime),
			debugging()
		},
		
		onSet: function() {
			selectedDate=this.get('select').obj,
			selectedDateTime=toUTC(selectedDate, selectedTime),
			debugging()
		},
		
		format: 'dddd, d mmmm, yyyy',
		min: todayLocal,
		clear: '',
		close: 'Cancel'
		
	});
	
	$backDate.on('click', function(){
		if (dateNoTime(selectedDateTime)-(1*24*60*60*1000) >= dateNoTime(todayUTC)){
			selectedDate.setDate(selectedDate.getDate()-1),
			$date.pickadate('picker').set('select', [selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()]),
			
			selectedDateTime=toUTC(selectedDate, selectedTime),
			
			debugging()
			
		} else {
			alert("You can't go back in time!")
		}
		
		if (selectedDateTime < todayUTC - (60*1000)){
			$time.pickatime('picker').set('select', todayLocal),
			
			timeHolder.setTime(todayUTC),
			
			selectedTime.hour=timeHolder.getHours(),
			selectedTime.mins=timeHolder.getMinutes(),
			selectedTime.time=(timeHolder.getHours() * 60) + (timeHolder.getMinutes()),
			selectedTime.pick=selectedTime.time,
			
			selectedDateTime=toUTC(selectedDate, selectedTime)
		}
	
	});
	
	$forwardDate.on('click', function(){
		selectedDate.setDate(selectedDate.getDate()+1), 
		$date.pickadate('picker').set('select', [selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()]),
		
		selectedDateTime=toUTC(selectedDate, selectedTime),
		debugging()
	});

/*TIME==================================================*/
	$time.pickatime({
	
		onStart: function(){
			this.set('select', todayLocal),
			selectedTime=(this.get('select')),
			selectedDateTime=toUTC(selectedDate, selectedTime),
			
			/*Changing Time Axis*/
					
			debugging()
		}, 
		
		onSet: function(){
			selectedTime=(this.get('select')),
			selectedDateTime=toUTC(selectedDate, selectedTime),
			
			/*Changing Time Axis*/
			updateAxis(selectedTime),
			
			debugging()
		},
		
		interval: 60,
		clear: '',
		close: 'Cancel',

		formatLabel: function(time) {
			var tes = this.get('now').pick;
			var hours = ( time.pick - tes) / 60,
				label = hours < 0 ? ' !hours to now' : hours > 0 ? ' !hours from now' : 'now'
			return  'h:i a <sm!all>' + ( hours ? Math.abs(hours) : '' ) + label +'</sm!all>'
		},

	});
	
	
	$backTime.on('click', function(){
	
		if (selectedDateTime-(60*60*1000) >= todayUTC-(60*1000)){
			selectedTime.time=(selectedTime.time-60),
			
			$time.pickatime('picker').set('select', selectedTime.time),

			selectedDateTime=toUTC(selectedDate, selectedTime),
			debugging()
			
		} else {
			alert("You can't go back in time!")
		}
		/*LOOPING from 1am to 12pm previous date*/
		if (selectedTime.time==0){
		
			selectedTime.time= (24*60);
			selectedDate.setDate(selectedDate.getDate()-1),
			
			$time.pickatime('picker').set('select', selectedTime.time),
			$date.pickadate('picker').set('select', [selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()]),
			
			selectedDateTime=toUTC(selectedDate, selectedTime)
		}
		/*Changing Time Axis*/
		
		
	});
	
	$forwardTime.on('click', function(){

		if (selectedTime.time==(23*60)){
			
			selectedTime.time= (0);
			selectedDate.setDate(selectedDate.getDate()+1),
			
			$time.pickatime('picker').set('select', selectedTime.time),
			$date.pickadate('picker').set('select', [selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()]),
			
			selectedDateTime=toUTC(selectedDate, selectedTime)
				
		} else {
		
			selectedTime=(selectedTime.pick+60),
			$time.pickatime('picker').set('select', selectedTime),
			
			selectedDateTime=toUTC(selectedDate, selectedTime)
			
		}
			
		/*Changing Time Axis*/	
	debugging()
	});
	

	function toUTC(date, time){
		var UTC;
	
		if (!time){
			time= {
				time: 0
			}
		};
		
		UTC=date.getTime() + (time.time * 60 * 1000); /*NEED TO FIX*/
		
		return UTC;
	}
		
	function dateNoTime(UTC){
		/*Strips time from UTC so results is only year-month-day*/
		var d = new Date();
		var dArray;
		var UTCStripped;
		
		d.setTime(UTC); 
		dArray= {
			year: d.getFullYear(),
			month: d.getMonth(),
			date: d.getDate()
			};
			
		d =new Date(dArray.year, dArray.month, dArray.date);
		
		UTCStripped = d.getTime();
		
		return UTCStripped;
	}
	
	function debugging(){
		console.clear();
		/*
		console.log("selectedDate = " + selectedDate);
		if (selectedTime){
			console.log("selectedTime = hour: " + selectedTime.hour + ", mins: " + selectedTime.mins + ", pick: " + selectedTime.pick)
		};
		console.log("selectedDateTime = " + selectedDateTime);
		console.log("todayUTC = " + todayUTC);
		*/
		timeHolder.setTime(selectedDateTime);
		console.log("Selected = " + timeHolder);
	}
	
	function updateAxis(timePicked){
		
		var time=timePicked.time;
		
		var hour = Math.floor(time / 60);
		var min = time % 60;
		
		var h; /*set hour*/
		var m; /*set min*/
		var ampm;
		
		var pad = "00";
		var $el;
		
		for (var i = 1, j = -2; i <= 5; i++, j++){
			$el = $("#Hour"+i);
			h=hour+j;
			/*Use If... else if */
			if(h>24){
				h=h-24;
				ampm="AM";
			}else if (h <= 24 && h>12){
				h = h-12;
				ampm="PM";
			}else if(h <=12 && h>0){
				ampm="AM";
			} else if(h <= 0){
				h = h +12
				ampm="PM";
			} else {
			alert("TimeError");
			}
		
			h=(pad+(h)).slice(-pad.length);
			m=(pad+(min)).slice(-pad.length);
			
			
			$el.text(h + ":" + m + " " + ampm);
			
		}
		/*
		if (hour <=9){
			hour= "0" + hour;
		}
		
		if (min <= 9){
			min="0"+min;
		}
		*/
		
		/*
		$('#Hour1').text((hour-2) + ":" + min);
		$('#Hour2').text((hour-1) + ":" + min);
		$('#Hour3').text((hour) + ":" + min);
		$('#Hour4').text((hour+1) + ":" + min);
		$('#Hour5').text((hour+2) + ":" + min);
		*/
	}
	

	
	
/*EFFECTS================================================*/
	$( ".TimeArrow" ).hover(
	   function(){  
		  $(this).stop().fadeTo('fast', 1);  
	   },  
	   function(){  
		  $(this).stop().fadeTo('fast', 0.3);  
	   }
	); 

	
	
/*EFFECTS================================================*/
	toUTC(selectedDate, selectedTime)

	
	
	
	alert("JS activated");
	
	
	
	
	
	
	
	
	
	
  }());