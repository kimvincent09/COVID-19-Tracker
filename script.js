window.addEventListener('DOMContentLoaded',
async() =>{
    await fetching();
})
async function fetching(){
    const response = await fetch("https://corona.lmao.ninja/v2/countries");
    const alldata = await response.json();
    const outputsection = document.querySelector('#output');

    const textHtml = alldata.map(data => {
        return `
        <tr>
        <td><img src="${data.countryInfo.flag}" id="flagph" width="30" height="20"><span> ${data.country}</span></td>
        <td>${data.active.toLocaleString()}</td>
        <td id="cases">${data.cases.toLocaleString()}</td>
        <td>${data.critical.toLocaleString()}</td>
        <td>${data.deaths.toLocaleString()}</td>
        </tr>
        `;
    });
    outputsection.innerHTML= textHtml.join(" ")
}
fetch('https://corona.lmao.ninja/v2/countries')
.then(res => res.json())
.then(data=> console.log(data))
.catch(error=> console.log('ERROR'))

let flag = 0;
document.querySelector('#mode').addEventListener('click', ()=>{

if(flag == 0){
    flag++;
    document.getElementById('body').style.background='#1f1b24';
    document.querySelector('.table').classList='table table-dark';
    document.querySelector('#mode').innerHTML ="Switch to Light Mode"
    document.querySelector('h1').style.color='white';
    console.log(flag)
}else if(flag == 1){
    document.getElementById('body').style.background='white';
    document.querySelector('.table').classList='table table-striped';
    document.querySelector('#mode').innerHTML ="Switch to Dark Mode"
    document.querySelector('h1').style.color='black';
    flag=0;
    console.log(flag)
}
})