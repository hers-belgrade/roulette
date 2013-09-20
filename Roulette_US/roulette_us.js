//Body Controller

/*

Bet struct:
{
'BType':...
'Serial:...
'Bet':... //what the player has put for this category
'SpinID':...//each spin has to have a UniqueIDentifier (odlican testni primer je (new Date()).getTime(), ovo daje broj milisekundi od 1.Jan.1970.
'Win':...
}

Stanja

0-15sec - place your bets
15sec-60sec - ball spining
60sec - 70sec - number animation

*/
function BTypeToNumber(Btype,Serial,Bet){
	brojevi = [];
	mp = 0;
	switch(Btype)
	{
	case "S":
		mp = 35;
		brojevi = [parseInt(Serial)];
		break;
	case "D":
		mp = 17;
		switch(Serial){
		case "00":brojevi = ['00',2];
		break;
		case "0":brojevi = ['00',3];
		break;
		case "1":brojevi = [0,1];
		break;
		case "2":brojevi = [0,2];
		break;
		case "3":brojevi = [1,2];
		break;
		case "4":brojevi = [1,4];
		break;
		case "5":brojevi = [2,3];
		break;
		case "6":brojevi = [2,5];
		break;
		case "7":brojevi = [3,6];
		break;
		case "8":brojevi = [4,5];
		break;
		case "9":brojevi = [4,7];
		break;
		case "10":brojevi = [5,6];
		break;
		case "11":brojevi = [5,8];
		break;
		case "12":brojevi = [6,9];
		break;
		case "13":brojevi = [7,8];
		break;
		case "14":brojevi = [7,10];
		break;
		case "15":brojevi = [8,9];
		break;
		case "16":brojevi = [8,11];
		break;
		case "17":brojevi = [9,12];
		break;
		case "18":brojevi = [10,11];
		break;
		case "19":brojevi = [10,13];
		break;
		case "20":brojevi = [11,12];
		break;
		case "21":brojevi = [11,14];
		break;
		case "22":brojevi = [12,15];
		break;
		case "23":brojevi = [13,14];
		break;
		case "24":brojevi = [13,16];
		break;
		case "25":brojevi = [14,15];
		break;
		case "26":brojevi = [14,17];
		break;
		case "27":brojevi = [15,18];
		break;
		case "28":brojevi = [16,17];
		break;
		case "29":brojevi = [16,19];
		break;
		case "30":brojevi = [17,18];
		break;
		case "31":brojevi = [17,20];
		break;
		case "32":brojevi = [18,21];
		break;
		case "33":brojevi = [19,20];
		break;
		case "34":brojevi = [19,22];
		break;
		case "35":brojevi = [20,21];
		break;
		case "36":brojevi = [20,23];
		break;
		case "37":brojevi = [21,24];
		break;
		case "38":brojevi = [22,23];
		break;
		case "39":brojevi = [22,25];
		break;
		case "40":brojevi = [23,24];
		break;
		case "41":brojevi = [23,26];
		break;
		case "42":brojevi = [24,27];
		break;
		case "43":brojevi = [25,26];
		break;
		case "44":brojevi = [25,28];
		break;
		case "45":brojevi = [26,27];
		break;
		case "46":brojevi = [26,29];
		break;
		case "47":brojevi = [27,30];
		break;
		case "48":brojevi = [28,29];
		break;
		case "49":brojevi = [28,31];
		break;
		case "50":brojevi = [29,30];
		break;
		case "51":brojevi = [29,32];
		break;
		case "52":brojevi = [30,33];
		break;
		case "53":brojevi = [31,32];
		break;
		case "54":brojevi = [31,34];
		break;
		case "55":brojevi = [32,33];
		break;
		case "56":brojevi = [32,35];
		break;
		case "57":brojevi = [33,36];
		break;
		}
		break;
	case "TL":
		mp = 11; 
		switch(Serial){
		case "0":brojevi = ['00',0,1,2,3];
		break;
		}
		break;
	case "ST":
		mp = 11; 
		switch(Serial){
		case "0":brojevi = [1,2,3];
		break;
		case "1":brojevi = [4,5,6];
		break;
		case "2":brojevi = [7,8,9];
		break;
		case "3":brojevi = [10,11,12];
		break;
		case "4":brojevi = [13,14,15];
		break;
		case "5":brojevi = [16,17,18];
		break;
		case "6":brojevi = [19,20,21];
		break;
		case "7":brojevi = [22,23,24];
		break;
		case "8":brojevi = [25,26,27];
		break;
		case "9":brojevi = [28,29,30];
		break;
		case "10":brojevi = [31,32,33];
		break;
		case "11":brojevi = [34,35,36];
		break;
		}
		break;
	case "B":
		mp = 8;
		switch(Serial){
		case "0":brojevi = [0,1,2];
		break;
		case "1":brojevi = ['00',0,2];
		break;
		case "2":brojevi = ['00',2,3];
		break;
		}
		break;
	case "Q":
		mp = 8;
		switch(Serial){
		case "0":brojevi = [1,2,4,5];
		break;
		case "1":brojevi = [2,3,5,6];
		break;
		case "2":brojevi = [4,5,7,8];
		break;
		case "3":brojevi = [5,6,8,9];
		break;
		case "4":brojevi = [7,8,10,11];
		break;
		case "5":brojevi = [8,9,11,12];
		break;
		case "6":brojevi = [10,11,13,14];
		break;
		case "7":brojevi = [11,12,14,15];
		break;
		case "8":brojevi = [13,14,16,17];
		break;
		case "9":brojevi = [14,15,17,18];
		break;
		case "10":brojevi = [16,17,19,20];
		break;
		case "11":brojevi = [17,18,20,21];
		break;
		case "12":brojevi = [19,20,22,23];
		break;
		case "13":brojevi = [20,21,23,24];
		break;
		case "14":brojevi = [22,23,25,26];
		break;
		case "15":brojevi = [23,24,26,27];
		break;
		case "16":brojevi = [25,26,28,29];
		break;
		case "17":brojevi = [26,27,29,30];
		break;
		case "18":brojevi = [28,29,31,32];
		break;
		case "19":brojevi = [29,30,32,33];
		break;
		case "20":brojevi = [31,32,34,35];
		break;
		case "21":brojevi = [32,33,35,36];
		break;
		}
		break;
	case "SL":
		mp = 5;
		switch(Serial){
		case "0":brojevi = [1,2,3,4,5,6];
		break;
		case "1":brojevi = [4,5,6,7,8,9];
		break;
		case "2":brojevi = [7,8,9,10,11,12];
		break;
		case "3":brojevi = [10,11,12,13,14,15];
		break;
		case "4":brojevi = [13,14,15,16,17,18];
		break;
		case "5":brojevi = [16,17,18,19,20,21];
		break;
		case "6":brojevi = [19,20,21,22,23,24];
		break;
		case "7":brojevi = [22,23,24,25,26,27];
		break;
		case "8":brojevi = [25,26,27,28,29,30];
		break;
		case "9":brojevi = [28,29,30,31,32,33];
		break;
		case "10":brojevi = [31,32,33,34,35,36];
		break;
		}
		break;
	case "DZ":
		mp = 2;
		switch(Serial){
		case "0":brojevi = [1,2,3,4,5,6,7,8,9,10,11,12];
		break;
		case "1":brojevi = [13,14,15,16,17,18,19,20,21,22,23,24];
		break;
		case "2":brojevi = [25,26,27,28,29,30,31,32,33,34,35,36];
		break;
		}
		break;
	case "V":
		mp = 2;
		switch(Serial){
		case "0":brojevi = [1,4,7,10,13,16,19,22,25,28,31,34];
		break;
		case "1":brojevi = [2,5,8,11,14,17,20,23,26,29,32,35];
		break;
		case "2":brojevi = [3,6,9,12,15,18,21,24,27,30,33,36];
		break;
		}
		break;
	case "O":
		mp = 1;
		switch(Serial){
		case "0":brojevi = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35];
		break;
		case "1":brojevi = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36];
		break;
		}
		break;
	case "E":
		mp = 1;
		switch(Serial){
		case "0":brojevi = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
		break;
		case "1":brojevi = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
		break;
		}
		break;
	case "C":
		mp = 1;
		switch(Serial){
		case "0":brojevi = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
		break;
		case "1":brojevi = [2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35];
		break;
		}
		break;
	case "Z":
		mp = 29/7;
		switch(Serial){
		case "0":brojevi = [12,35,3,26,0,32,15];
		break;
		}
		break;
	case "WZ":
		mp = 19/17;
		switch(Serial){
		case "0":brojevi = [22,18,29,7,28,12,35,3,26,0,32,15,19,4,21,2,25];
		break;
		}
		break;
	case "ORPH":
		mp = 3;
		switch(Serial){
		case "0":brojevi = [17,34,6,1,20,14,31,9];
		break;
		}
		break;
	case "TOTW":
		mp = 2;
		switch(Serial){
		case "0":brojevi = [27,13,36,11,30,8,23,10,5,24,16,33];
		break;
		}
		break;
	}
	return{
		"brojevi" : brojevi,
		"mp" : mp,
		"bet" : Bet,
		"win" : Bet*mp
	};
};

function currentmsecs(){
	return (new Date()).getTime();
};






// CONTROLLER
function RouletteCtrl($scope){

function Cycle(statearry){ //[{state:statecode,duration:msecs},{state:othercode,duration:msecs}]
	var sal = statearry.length;
	var duration = 0;
	for(var i = 0; i<sal; i++){
		setTimeout(
			(
				function(state){
					var _s = state; 
					return function(){
						$scope.$apply(function(){
							$scope.Condition=_s;
							if (_s == 'Announcing-NoBetsStill'){
								$scope.randomNumber();
								$scope.loadWins();
								$scope.currentNumber = $scope.RNumber;
							}
							if (_s == 'PlaceBets'){
								var d = new Date();
								$scope.spinId = d.getTime()
								$scope.emptyUserBets();
								$scope.totalBalance = 0;
								$scope.currentNumber = 'Waiting...';						
							}
						});
					};
				}
			)(statearry[i].state)
			,duration
		);
		duration += statearry[i].duration;
	}
	setTimeout((function(sa){
		var statearry=sa;
		return function(){
			Cycle(statearry);
		};
	})(statearry),duration);
};
//Racun
	$scope.racun = 0;
	
	$scope.addKredit = function(kredit){
		if(!$scope.Condition){
			if(kredit>0)$scope.racun+=kredit;
			$scope.Conditions();
		}
	};	
	$scope.brziUlog = 1;
		
//Igre
	$scope.betTypes = [
	{'BType':'S','Serial':[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]},
	{'BType':'D','Serial':[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57]},
	{'BType':'T','Serial':[0,1]},
	{'BType':'ST','Serial':[0,1,2,3,4,5,6,7,8,9,10,11]},
	{'BType':'B','Serial':[0]},
	{'BType':'Q','Serial':[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]},
	{'BType':'SL','Serial':[0,1,2,3,4,5,6,7,8,9,10]},
	{'BType':'DZ','Serial':[0,1,2]},
	{'BType':'V','Serial':[0,1,2]},
	{'BType':'O','Serial':[0,1]},
	{'BType':'E','Serial':[0,1]},
	{'BType':'C','Serial':[0,1]},
	{'BType':'Z','Serial':[0]},
	{'BType':'WZ','Serial':[0]},
	{'BType':'ORPH','Serial':[0]},
	{'BType':'TOTW','Serial':[0]},
	];

	$scope.prevNumbers = [];
	
	$scope.Conditions = function(){
		Cycle([{state:'PlaceBets',duration:6000},{state:'Spinning',duration:2000},{state:'Stopping-BetsClosed',duration:2000},{state:'Announcing-NoBetsStill',duration:9000}]);
	}
	//$scope.RNumber = Math.floor(Math.random()*37);
	$scope.randomNumber = function(){
		switch($scope.Condition){
		case 'Announcing-NoBetsStill':
			$scope.RNumber = Math.floor(Math.random()*37);
			$scope.prevNumbers.push($scope.RNumber);
			break;
		default:
			break;
		}
	}

//Igraci

	$scope.userBets = [];
	$scope.emptyUserBets = function(){
		$scope.userBets = [];
	};
	
	$scope.addBet = function(Niz,BType,Serial,Ulog){
		var filled = 0;
		for(var i = 0 ; i<Niz.length ; i++){
			if ((Niz[i].BType === BType) && (Niz[i].Serial === Serial)){
				Niz[i].Bet += Ulog;
				filled = 1;
				break;
			}
		}
		if (!filled){
			 var d = new Date();
			 Niz.push({"BType":BType , "Serial":Serial , "Bet":Ulog ,"Win": 0 ,"Spin_ID":$scope.spinId});
		}
	};
	$scope.loadWins = function(){
		for(var i = 0 ;i<$scope.userBets.length; i++){
			var convert = BTypeToNumber($scope.userBets[i].BType,$scope.userBets[i].Serial.toString(),$scope.userBets[i].Bet);
				if (convert.brojevi.indexOf($scope.RNumber) != -1) {
					$scope.userBets[i].Win = convert.win;
					$scope.racun += convert.win;
					$scope.totalBalance += convert.win;
				}
			}
		$scope.ajde = convert;
	};
	$scope.fillUserBets = function(BType,Serial,Ulog){
		switch($scope.Condition){
		case 'PlaceBets':
			if(Ulog <= $scope.racun && Ulog > 0){
				$scope.addBet($scope.userBets,BType,Serial,Ulog);
				$scope.racun -= Ulog;
				$scope.totalBalance -= Ulog;
			}
			break;
		default :
			//$window.alert('Be Patient and wait for next spin');
			break;
		}
	};
	
	$scope.emptyUserBets = function(){
		$scope.userBets = [];
	}
	
	//$window = $service('$window');
	
	$scope.addFast = function(BType,Serial,brziUlog){
		switch($scope.Condition){
		case 'PlaceBets':
			if(brziUlog <= $scope.racun && brziUlog > 0){
				$scope.addBet($scope.userBets,BType,Serial,brziUlog);
				$scope.racun -= brziUlog;
				$scope.totalBalance -= brziUlog;
			}
			break;
		default:
			break;
		}
	};


}
