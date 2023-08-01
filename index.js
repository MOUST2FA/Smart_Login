
let donname=document.getElementById('donname')
let domemail=document.getElementById('domemail')
let pombassw=document.getElementById('pombassw')
let brodemail=document.getElementById('brodemail')
let brodpassw=document.getElementById('brodpassw')
let addlogin=document.getElementById('addlogin')


let brodarry=[]


function textUser(){

    brodarry=JSON.parse(localStorage.getItem('brodacts'))

    for(let i=0;i<brodarry.length;i++){

        if(brodemail.value==brodarry[i].email && brodpassw.value==brodarry[i].bassw){
            location.href="home.html"

        } 
        else{
            alert('incorrect email or password')
        }
      
       
    }
}


function brodct(){
    let brodOpject={
        name:donname.value,
        email:domemail.value,
        bassw:pombassw.value,
}


if(check(domemail.value) && check1(pombassw.value) && check2(donname.value)){
    brodarry.push(brodOpject)
    Clear()
    localStorage.setItem('brodacts',JSON.stringify(brodarry))


}
else {
    alert('All inputs is required')
}

}
function Clear(){
    donname.value=""
    domemail.value=""
    pombassw.value=""
}



function check(str){
    let regex =/[a-zA-Z0-9]{1,}@(gmail|yahoo).com/
    return regex.test(str)
}
function check1(str){
    let regex =/[0-9]{3,}/
    return regex.test(str)
}
function check2(str){
    let regex =/[a-zA-Z]{3,}/
    return regex.test(str)
}











// if(check(domemail.value)){
//     brodarry.push(brodOpject)
//     Clear()
//     localStorage.setItem('brodacts',JSON.stringify(brodarry))
// }
// else {
//     alert('invalid product email')
// }

// if(check1(pombassw.value)){
//     brodarry.push(brodOpject)
//     Clear()
//     localStorage.setItem('brodacts',JSON.stringify(brodarry))
// }
// else {
//     alert('invalid product password')
// }

// if(check2(donname.value)){
//     brodarry.push(brodOpject)
//     Clear()
//     localStorage.setItem('brodacts',JSON.stringify(brodarry))
// }
// else {
//     alert('invalid product name')
// }

