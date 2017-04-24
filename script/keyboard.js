'use strict';
/*jslint plusplus: true */

var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function getKeys() {
    var chars, i;
    chars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0'];

    for (i = 0; i < chars.length; i++) {
        $('keys').innerHTML += '<div class="key" onclick="print(' +
            "'" + chars[i] + "'" + ')"><div class="content"><span>' +
            chars[i] + '</span></div></div>';
    }
};

function print(nr) {
    $('input').value += nr;
}

function del() {
    $('input').value = $('input').value.slice(0, -1);
}

function slide() {
    $('numPad').classList.toggle('open');
}

function submit() {
    var val = $('input').value;
    
    $('output').innerHTML +=  val + '<br />';
    $('input').value = '';
    slide();
}


