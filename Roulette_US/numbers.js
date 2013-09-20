function numbers(limit){
var niz=[];
for(var i = 0; i<=limit; i++)
	niz.push(i);
return niz;
};

process.stdout.write((numbers(21)).toString());
