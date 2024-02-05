const getRandomIntNumberInRange = (min, max) =>{
    return Math.floor(Math.random() * max) + min;
}

document.querySelector('button').addEventListener('click',() => {
    const nopan_arvo = getRandomIntNumberInRange(1,6)
    if (nopan_arvo === 1){
        document.getElementById('noppa').src='./img/1.png'
    }

    if (nopan_arvo === 2 ){
        document.getElementById('noppa').src='./img/2.png'
    }

    if (nopan_arvo === 3 ){
        document.getElementById('noppa').src='./img/3.png'
    }

    if (nopan_arvo === 4 ){
        document.getElementById('noppa').src='./img/4.png'
    }

    if (nopan_arvo === 5 ){
        document.getElementById('noppa').src='./img/5.png'
    }

    if (nopan_arvo === 6 ){
        document.getElementById('noppa').src='./img/6.png'
    }
})