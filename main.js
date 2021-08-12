const getRemainTime = deadLine => {
    let now = new Date();
    // console.log(now);
    let remainTime = (new Date(deadLine) - now + 1000) / 1000;
    // console.log(remainTime)
    let remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
    // concatenamos un 0 para obtener el numero entero es una solucion mas practica
    // console.log(remainSeconds)
    let remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
    // console.log(remainMinutes);
    let remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2);
    // console.log(remainHours);
    let remainDays =  Math.floor(remainTime / (3600 * 24));
    // console.log(remainDays);

    return{
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
}

const countdown = (deadLine, elem, finalMessage) => {
    const el = document.getElementById(elem);

    const timeUpDate = setInterval(() => {
        let time = getRemainTime(deadLine);
        el.innerHTML = `el tiempo restantes es ${time.remainDays} dias con ${time.remainHours} horas, con ${time.remainMinutes} minutos y ${time.remainSeconds} segundos`;

        // detener el intervalo
        if(time.remainTime <=  1){
            clearInterval(timeUpDate);
            el.innerHTML = finalMessage;
        }
    }, 1000);
}


// console.log(getRemainTime('Tue Aug 31 2021 23:59:59 GMT-0300'));

countdown('Tue Aug 31 2021 23:59:59 GMT-0300', 'clock', 'tiempo finalizado');