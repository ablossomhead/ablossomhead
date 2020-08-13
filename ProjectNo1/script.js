
function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
    
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

const hubby = {
    name: 'Jodie',
    birthday: 'September 18, 1982',
    age: calculate_age(new Date(1982, 09, 18)),
}

const sons = [
    {
        name: 'Ethan',
        birthday: 'May 21, 2003',
        age: calculate_age(new Date(2003, 05, 21)),
    },
    {
        name: 'Aidan',
        birthday: 'August 31, 2006',
        age: calculate_age(new Date(2006, 08, 31)),
    }
]

console.log(sons);
console.log(hubby);