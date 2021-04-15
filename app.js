const button = document.getElementById('but');
const rodzaj = document.getElementById('rodzaj');
const ilosc = document.getElementById('ilosc');
const div = document.getElementById('wynik');

var cena = 0;


button.addEventListener('click', () => {
    
    let rod = rodzaj.valueAsNumber;
    let il = ilosc.valueAsNumber;

    if(rod == 1) cena = 4;
    else if(rod == 2) cena = 3.5;
    else cena = 0;

    let wynik = il*cena;

    div.innerHTML = `koszt paliwa: ${wynik} zł`;
})