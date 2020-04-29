const button4 = document.getElementById('mySearch');
const div4 = document.querySelector('.out4');

button4.onclick = function () {
    let myArr = [{
            name: 'Jonny Walker',
            birthDate: '1995-12-17'
        },
        {
            name: 'Andrew',
            birthDate: '2001-10-29'
        },
        {
            name: 'Viktor',
            birthDate: '1998-11-09'
        },
        {
            name: 'Andrew',
            birthDate: '2011-05-09'
        }

    ];
    let str = "Andrew"

    function searchByName(name) {
        finalArr = [];
        for (let [key, value] of Object.entries(myArr)) {
            //console.log(value);
            if (name == value.name) {
                finalArr.push(value);
            }
        }
        //console.log(myArr[item]);
        console.log(finalArr);
        return finalArr;

    };
    let myFinal = searchByName(str);
    console.log(JSON.stringify(myFinal));

    div4.innerHTML = JSON.stringify(myFinal);
    //div4.innerHTML = ("Результат" + ": " + "[" +  + "]");
};
