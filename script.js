const nahodneCislo1 = Number(prompt('Napiš náhodné číslo:'))
const nahodneCislo2 = Number(prompt('Napiš náhodné číslo:'))
const nahodneCislo3 = Number(prompt('Napiš náhodné číslo:'))


const max3 = (cislo1, cislo2, cislo3) =>{
    if (cislo1 >= cislo2 && cislo1 >= cislo3) {
        return cislo1

    } else if  (cislo2 >= cislo1 && cislo2 >= cislo3) {
        return cislo2
    
    } else if  (cislo3 >= cislo1 && cislo3 >= cislo2) {
        return cislo3
    }

}

const nejvetsiCislo = max3(nahodneCislo1, nahodneCislo2, nahodneCislo3)


console.log(`${nejvetsiCislo} je největší číslo.`)