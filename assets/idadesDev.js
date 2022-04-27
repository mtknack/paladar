function getAge(year,month,day){
    let nascimento = new Date(year,month,day);
    let now = new Date();
    idade = parseInt((now - nascimento)/(1000*60*60*24*365))
    return idade
}

document.getElementById('idadeChris').textContent = `${getAge(2001,9,17)} anos`
document.getElementById('idadeTalles').textContent = `${getAge(2002,5,2)} anos`
document.getElementById('idadeMatheus').textContent = `${getAge(2002,2,30)} anos`