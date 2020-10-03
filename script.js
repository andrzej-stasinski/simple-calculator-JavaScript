
console.log('Kalkulator');
var dokad = 0;

function wprowadz(a) {
	console.log('Wywołano funkcję');
	console.log('a='+a);

	if(dokad == 0) {
		if(kalkulator.skl1.value.length < 3)
			kalkulator.skl1.value += a;		
	} else {
		if(kalkulator.skl3.value.length < 3)
			kalkulator.skl3.value += a;			
	}
}

function zn(znak) {
	if(kalkulator.skl1.value.length > 0) {
		kalkulator.skl2.value = znak;
		dokad++;		
	}
}

function Wykonaj() {
	console.log('Wynik');
	var t = kalkulator.skl2.value;
	console.log(t);
	switch(t) {
		case '+':
		kalkulator.wynik.value = parseInt(kalkulator.skl1.value) + parseInt(kalkulator.skl3.value);
		break;
		case '-':
		kalkulator.wynik.value = parseInt(kalkulator.skl1.value) - parseInt(kalkulator.skl3.value);
		break;
		case '*':
		kalkulator.wynik.value = parseInt(kalkulator.skl1.value) * parseInt(kalkulator.skl3.value);
		break;	
		case '/':
		kalkulator.wynik.value = parseInt(kalkulator.skl1.value) / parseInt(kalkulator.skl3.value);
		break;							
	}
}

function cancel() {
	kalkulator.skl1.value = '';
	kalkulator.skl2.value = '';
	kalkulator.skl3.value = '';
	kalkulator.wynik.value = '';
	dokad = 0;
}
