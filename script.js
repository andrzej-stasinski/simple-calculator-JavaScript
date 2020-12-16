
console.log('Kalkulator');

var dokad = 0;
const kalkulator = document.querySelector('#kalkulator')

function wprowadz(a) {
	console.log('Wywołano funkcję');
	console.log('a='+a);

	if(dokad == 0) {
		if(kalkulator.skl1.value.length < 3) {
			kalkulator.skl1.value += a;	
			kalkulator.skl1.style.border = '1px solid gray'				
		}
	} else {
		if(kalkulator.skl3.value.length < 3) {
			kalkulator.skl3.value += a;	
			kalkulator.skl3.style.border = '1px solid gray'
		}			
	}
}

function zn(znak) {
	if(kalkulator.skl1.value.length > 0) {
		kalkulator.skl2.value = znak;
		kalkulator.skl2.style.border = '1px solid gray'
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
	skl1.style.border = '1px solid gray'
	skl2.style.border = '1px solid gray'
	skl3.style.border = '1px solid gray'
}

const skl1 = document.querySelector('#skl1')
console.dir(skl1)
skl1.addEventListener('input', function() {
	const data = /^[0-9]+$/.test(this.value)
	if(data) {
		this.style.border = '1px solid gray'
	} else {
		this.value = ''
		this.style.border = '1px solid red'
	}
})

const skl2 = document.querySelector('#skl2')
console.dir(skl2)
skl2.addEventListener('input', function() {
	if(this.value === '+' || this.value === '-' || this.value === '*' || this.value === '/') {
		console.log('ok')
		this.style.border = '1px solid gray'
	} else {
		console.log('no')
		this.value = ''
		this.style.border = '1px solid red'
	}
})

const skl3 = document.querySelector('#skl3')
console.dir(skl3)
skl3.addEventListener('keyup', function(e) {
	const data = /^[0-9]+$/.test(this.value)
	if(data) {
		this.style.border = '1px solid gray'
	} else {
		this.value = ''
		this.style.border = '1px solid red'
	}	
	if(e.keyCode === 13) {
		Wykonaj()
	}
})














