
function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
    
    return Math.abs(age_dt.getUTCFullYear() - 1970);
};

////calculate_age(new Date(2006, 08, 31));

function calculate_bornday(dob) {
    let date = new Date(dob);
    return date.toDateString();
};
////calculate_bornday('1982, 9, 18');

const family = [
    {
        name: "Jodie",
        bornday: calculate_bornday('1982, 9, 18'),
        age: calculate_age(new Date(1982, 09, 18)),
    },
    {
        name: "Ethan",
        bornday: calculate_bornday('2003, 5, 21'),
        age: calculate_age(new Date(2003, 05, 21)),
    },
    {
        name: "Aidan",
        bornday: calculate_bornday('2006, 8, 31'),
        age: calculate_age(new Date(2006, 08, 31)),
    }
];

console.log(family);