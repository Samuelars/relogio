
function atualizarRelogio() {
    const hora = document.getElementById('hora');
    const minuto = document.getElementById('minuto');
    const segundo = document.getElementById('segundo');
    const agora = new Date();

    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();
    const horaFormatada = `${horas}:${minutos}:${segundos}`
    console.log(`Hora atual: ${horaFormatada}`);

    hora.innerHTML = horas;
    minuto.innerHTML = minutos;
    segundo.innerHTML = segundos;
}

atualizarRelogio();

setInterval(atualizarRelogio, 1000);