'use strict';
(function () {

    var primeBtn = document.querySelector('.primeBtn');
    primeBtn.onclick = primeNumber;

})();

function primeNumber() {
    var a = prompt('Enter First number:');
    var b = prompt('Enter Second number:');
    var numbOne = 0;
    var numbTwo = 0;
    var primeList = [];
    //validation
    if (a > b) {
        numbOne = b;
        numbTwo = a;
    }
    if (a < b) {
        numbOne = a;
        numbTwo = b;
    }
    if (a == b) {
        alert('Please enter non equal numbers');
        a = prompt('Enter First number:');
        b = prompt('Enter Second number:');
    }
    if (a == '' || '' == b || a == null || null == b) {
        alert(`Please Enter TWO numbers`);
        a = prompt('Enter First number:');
        b = prompt('Enter Second number:');
    }

    prime:
        for (var i = numbOne; i <= numbTwo; i++) {
            
            for (var primeNum = 2; primeNum < i; primeNum++) {
                if (i % primeNum == 0) continue prime;
            }

            if (i >= 2) {
                primeList.push(i); 
            }

    } 
    alert(`For range from ${numbOne} to ${numbTwo}\nPrime number list is:\n ${primeList}`);
}

