// // task1
// let time = prompt("1-12 ге шейін сан еңгізіңіз")

// if(time>3 || time<=5){
// alert("Ай:"+ time + "\n" +"Маусым:Spring")
// }else if(time>6 || time<=8){
// alert("Ай:"+ time + "\n" +"Маусым:Summer")
// }else if(time>9 || time<=11){
//     alert("Ай:"+ time + "\n" +"Маусым:Autunm")
// }else if(time>1 || time>2 || time<=12){
//     alert("Ай:"+ time + "\n" +"Маусым:Winter")
// }else{
//     alert("Берілген cандарды еңгізіңіз!")
// }

//task 2
let san1 = +prompt("1 Сан еңгіз");
let san2 = +prompt("2 сан еңгізіңіз");
                                                                                                                                                                                                                                                                                         
switch (true){
    case san1 > san2:
        alert("1 сан үлкен");
        break;
    case san1 < san2:
        alert("2 сан үлкен");
        break;
    case san1 == san2:
        alert("Сандар тең");
        break;
    default:
        alert("Өтінемін, сандарды еңгізіңіз");
}


