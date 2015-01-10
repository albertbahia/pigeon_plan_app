  $(document).ready(function () {

  /*==================================================*/
	var today = {
		local: new Date()
	}
	today.utc= today.local.getTime();

	var selectedDate;
	var selectedTime;

	var myDate;
	
	var $date = $('#InputDate');     // Date Input
	var $backDate = $('.icon-backwards');
	var $forwardDate = $('.icon-forwards');
	
	var $time = $("#InputTime");
	var $backTime = $(".icon-back");
	var $forwardTime = $(".icon-next");
/*==================================================*/

//Need to Fix "Today" button on date selection
//Fix semicolones!!!
	
/*DATE==================================================*/
	$date.pickadate({
	
		onStart: function(){
			this.set('select', (today.local)),
			selectedDate=this.get('select').obj,
			myDate=totalTime(selectedDate, selectedTime)
		},
		
		onSet: function() {
			selectedDate=this.get('select').obj,
			myDate=totalTime(selectedDate, selectedTime)
		},
		
		onClose: function(){
			debugging()
		},
		
		format: 'dddd, d mmmm, yyyy',
		min: today.local,
		clear: '',
		close: 'Cancel'
		
	});/*$date.pickadate*/
	
	$backDate.on('click', function(){
		
		if (dateNoTime(myDate.utc) > dateNoTime(today.utc)){ //if the date is different
			selectedDate.setDate(selectedDate.getDate()-1),
			$date.pickadate('picker').set('select', [selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()])
			
			//If after changing the date, the time is in the past, change the time to current time.
			if (myDate.hour <  today.local.getHours()){
				$time.pickatime('picker').set('select', [today.local.getHours(), 0]),
				selectedTime.time=(today.local.getHours() * 60) + (today.local.getMinutes())
			}
		} else if (myDate.hour > today.local.getHours()){//if the date is same date but has more time
			$time.pickatime('picker').set('select', [today.local.getHours(), 0]),
			selectedTime.time=(today.local.getHours() * 60) + (today.local.getMinutes())
		} else {
			alert("You can't go back in time!")
		}
		
		myDate=totalTime(selectedDate, selectedTime)

		debugging()
	});/*$backDate.on*/
	
	$forwardDate.on('click', function(){
		selectedDate.setDate(selectedDate.getDate()+1), 
		$date.pickadate('picker').set('select', [selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()]),
		
		myDate=totalTime(selectedDate, selectedTime),
		debugging()
	}); /*$forwardDate.on*/

/*TIME==================================================*/
	$time.pickatime({
	
		onStart: function(){
			this.set('select', [today.local.getHours(),0]),
			selectedTime=(this.get('select')),
			myDate=totalTime(selectedDate, selectedTime);
		}, 
		
		onOpen: function() {
			setMin()
		},
		
		onSet: function(){
			selectedTime=(this.get('select')),
			myDate=totalTime(selectedDate, selectedTime),
			updateAxis(selectedTime)
		},
		
		onClose: function(){
			debugging()
		},
		
		interval: 60,
		clear: '',
		close: 'Cancel',
		
		hiddenSuffix: '__suffix',

		formatLabel: function(time) {

			var tempTime = totalTime(selectedDate, time);
			
			delta=deltaTime(today, tempTime);
			
			d = delta.day;
			h = delta.hour;
			mi = delta.min;
			u = delta.utc; 
			
			label = "";
			
			if (d > 0){
				label += d + (d > 1 ? " d!ays, " : " d!ay, ");
			}
			if (h > 0){
				label += h + (h > 1 ? " !hours, " : " !hour, ");
			}
			if (mi > 0){
				label += mi + (mi > 1 ? " m!inutes, " : " m!inute, ");
			}
			
			label = label.substring(0, label.length - 2);
			
			if (u > 0){
				label += " from now";
			} else if (u<0){
				label += " !ago";
			}
			
			return  'h:i a <sm!all>' + label +'</sm!all>';
		},

		/*
		formatLabel: function(time) {
			var hours = ( time.pick - this.get('now').pick ) / 60,
				label = hours < 0 ? ' !hours to now' : hours > 0 ? ' !hours from now' : 'now'
			return  'h:i a <sm!all>' + ( hours ? Math.abs(hours) : '' ) + label + '</sm!all>'
		}
		*/
	});/*$time.pickatime*/
	
	
	$backTime.on('click', function(){
		/*
		$('#Time').animate({
			duration: 500,
			left: "-=160",
			
			opacity: 0.0, 
			
			complete: function() {
				
			}
			
        });
		
		*/
/*
		$('#Time').animate(
			{left: "+=160"}, 900, 
		    function() {
				$(this).attr({ 'style' : '' })
			}
		);
*/
	

		
		if (dateNoTime(myDate.utc) > dateNoTime(today.utc) || myDate.hour > today.local.getHours()){
			selectedTime.time=(selectedTime.time-60)
			if (selectedTime.time==-60){
			
				//Resetting time loop
				selectedTime.time= (24*60);
				
				//Changing Date
				selectedDate.setDate(selectedDate.getDate()-1),
				$date.pickadate('picker').set('select', [selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()])
			},
			/*Changing Time Axis*/
			updateAxis(selectedTime, "backTime")
		} else {
			alert("You can't go back in time!")
		}
		/*LOOPING from 1am to 12pm previous date
		if (selectedTime.time==0){
		
			//Resetting time loop
			selectedTime.time= (24*60);
			selectedDate.setDate(selectedDate.getDate()-1),
			
			//Changing Date
			$date.pickadate('picker').set('select', [selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()])
	
		}
		*/
		$time.pickatime('picker').set('select', selectedTime.time),
		myDate=totalTime(selectedDate, selectedTime),
		

		
		debugging();
		
	});/*$backTime.on*/
	
	$forwardTime.on('click', function(){
	/*
		$('#Time').animate({
			duration: 500,
			left: "+=160",
			
			opacity: 0.0, 
			
			complete: function() {
				
			}
			
        });
	*/
		if (selectedTime.time==(23*60)){ //If the time is 11pm going to 12am, need to change the date and reset the hour
			//Resetting time loop
			selectedTime.time= 0;
			
			//Changing Date
			selectedDate.setDate(selectedDate.getDate()+1),
			$date.pickadate('picker').set('select', [selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()])
		} else {
			selectedTime.time=(selectedTime.time+60)
		};
		
		$time.pickatime('picker').set('select', selectedTime.time);
		myDate=totalTime(selectedDate, selectedTime);
		/*Changing Time Axis*/
		updateAxis(selectedTime, "forwardTime");
		
		debugging()
		$('#Time').attr({ 'style' : '' });
	}); /*$forwardTime.on*/
	
/*FUNCTIONS==================================================*/

	function totalTime(date, time){
		var d = new Date();
		var total;
	
		if (!time){
			time= {
				time: 0
			}
		};
		
		d.setTime(date.getTime() + (time.time * 60 * 1000));
		
		total = {
			year: d.getFullYear(),
			month: d.getMonth(),
			date: d.getDate(),
			hour: d.getHours(),
			min: d.getMinutes(),
			utc: d.getTime()
		};
		
		return total;

	}/*function totalTime*/
		
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
	} /*function dateNoTime(*/
	
	function updateAxis(timePicked, shifting){
		
		var time=timePicked.time;
		
		var hour = Math.floor(time / 60);
		var min = time % 60;
		
		var h; /*set hour*/
		var m; /*set min*/
		var ampm;
		
		var pad = "00";
		var $el;
		
		var move;
		
		move = (typeof shifting === "undefined") ? 0 : (shifting == "backTime" ? "+=160": "-=160") 

//FIX MEEEE		
		$('#Time').animate(
			{left: move}, 200, 
		    function() {
				for (var i = 1, j = -3; i <= 7; i++, j++){
					$el = $("#Hour"+i);
					
					h=hour+j;
					/*Use If... else if */
					if(h>24){
						h=h-24;
						ampm="AM";
					}else if (h == 24){
						h = 12;
						ampm="AM";
					}else if (h < 24 && h>12){
						h = h-12;
						ampm="PM";
					}else if (h == 12){
						h = 12;
						ampm="PM";
					}else if(h <12 && h>0){
						ampm="AM";
					}else if (h == 0){
						h = 12;
						ampm="AM";
					} else if(h < 0){
						h = h +12
						ampm="PM";
					} else {
					alert("TimeError");
					}
				
					h=(pad+(h)).slice(-pad.length);
					m=(pad+(min)).slice(-pad.length);
					
					/*
					axis.push({
						$element: $el, 
						text: (h + ":" + m + " " + ampm)
					});
					*/
					
					$el.text(h + ":" + m + " " + ampm);
					
					/*
					$el.hide("slide", { direction: "left" }, 1000);
					
					$el.animate({left:'0px'}, {queue: false, duration: 500})
					$el.text(h + ":" + m + " " + ampm);
					$el.delay(500).fadeIn(500);
					*/
					
					
				}
				$(this).attr({ 'style' : '' })
			}
		);
		/*
		$('.TimeAxis').show("slide", { direction: "left" }, 1000)
		*/
		/*
		$('#Time').attr({ 'style' : '' });
		*/
		/*
		$('#Time').animate({
			opacity: 100
		});
		*/
	} /*function updateAxis*/
	
	function setMin(){
		if (dateNoTime(myDate.utc)== dateNoTime(today.utc)){
			$time.pickatime('picker').set('min', [today.local.getHours(), 0])
		} else {
			$time.pickatime('picker').set('min', '')
		}
	
	}
	
	function deltaTime(now, future) {
	
		var utc = future.utc - now.utc;
		
		// getting rid of milliseconds, convert to positive
		delta = Math.floor(Math.abs(utc / 1000));
		
		// calculate (and subtract) whole days
		var day = Math.floor(delta / (60*60*24));
		delta -= day * (60*60*24);

		// calculate (and subtract) whole hours
		var hour = Math.floor(delta / (60*60));
		delta -= hour * (60*60);

		// calculate (and subtract) whole minutes
		var min = Math.floor(delta / 60);
		delta -= min * 60;

		// what's left is seconds
		var sec = delta % 60;  
		
		delta = {
			day: day,
			hour: hour,
			min: min,
			utc: utc
		};
	
		return delta;
	}
	
	
	function debugging(){
	
		console.clear();
		
		console.log("Year: " + myDate.year);
		console.log("Month: " + myDate.month);
		console.log("Date: " + myDate.date);
		console.log("Hour: " + myDate.hour);
		console.log("Minute: " + myDate.min);
		console.log("UTC: " + myDate.utc);

	} /*function debugging*/
	
	
/*EFFECTS================================================*/
	$( ".TimeArrow" ).hover(
	   function(){  
		  $(this).stop().fadeTo('fast', 1);  
	   },  
	   function(){  
		  $(this).stop().fadeTo('fast', 0.3);  
	   }
	); 
	
	function animateAxis(shifting){
		var move;
		
		move = (typeof shifting === "undefined") ? 0 : (shifting == "backTime" ? "+=160": "-=160");
	
		$('#Time').animate(
			{left: move}, 200, 
		    function() {
				updateAxis(timePicked)
			}
		)
	}

/*EFFECTS================================================*/
	myDate=totalTime(selectedDate, selectedTime)

	
	
	
	alert("JS activated");
	
	
	
	
	
	
	
	
	
	
  }());