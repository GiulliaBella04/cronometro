const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
var hh = 00;
var mm = 00;
var ss = 00;
var milesimos = 1000;
var cronometro;

start.addEventListener('click', function(){
    cronometro = setInterval(() => { timer(); }, milesimos);
    
})

pause.addEventListener('click', function(){
    clearInterval(cronometro);
    var formatar= (hh < 10 ? '0'+hh : hh)+':'+ (mm < 10 ? '0'+mm : mm) + ':'+ (ss<10 ? '0'+ss : ss);
    document.getElementById("tempo").innerText=formatar;
})

reset.addEventListener('click', function(){
    clearInterval(cronometro);
    hh = 00;
    mm = 00;
    ss = 00;
    document.getElementById("tempo").innerText='00:00:00';
})

function timer(){
    ss++;
    if(ss>=60){
        mm++;
        ss=0;

        if(mm>=60){
            mm=0;
            hh++;
        }
    }
    var formatar= (hh < 10 ? '0'+hh : hh)+':'+ (mm < 10 ? '0'+mm : mm) + ':'+ (ss<10 ? '0'+ss : ss);
    document.getElementById("tempo").innerText=formatar;
}