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
		case "0":brojevi = [0,1];
		break;
		case "1":brojevi = [0,2];
		break;
		case "2":brojevi = [0,3];
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
	case "T":
		mp = 11; 
		switch(Serial){
		case "0":brojevi = [0,1,2];
		break;
		case "1":brojevi = [0,2,3];
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
		case "0":brojevi = [0,1,2,3];
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
