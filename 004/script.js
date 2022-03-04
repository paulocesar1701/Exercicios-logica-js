function media(n1=0,n2=0,n3=0,n4=0,media=0){
n1 = parseFloat(n1)
n2 = parseFloat(n2)
n3 = parseFloat(n3)
n4 = parseFloat(n4)
media = (n1 + n2 + n3 + n4) / 4
document.querySelector("#resultado").innerHTML = "A média é:" + media
}


