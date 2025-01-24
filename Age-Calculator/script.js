const userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split("T")[0];

const btn = document.getElementById("btn");
const result = document.getElementById("result");

function calcAge(){
    let birthDate = new Date(userInput.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();
    
    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3,m3,y3;
    d3 = d2 - d1;
    m3 = m2 - m1;
    y3 = y2 - y1;
    console.log(y3);

    if(m2 > m1){
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 -m1;
    };

    if(d2 > d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1,m1) + d2 - d1;
    };

    if(m3 < 0){
        m3 = 11;
        y3--;
    };
    if(m2===m1 && d2===1 && y2===y1){
        result.innerHTML = `You are <span>${0}</span> years , <span>${0}</span> months and <span>${0}</span> days old!`;
        result.classList.add("visible");
    }else{
        result.innerHTML = `You are <span>${y3}</span> years , <span>${m3}</span> months and <span>${d3}</span> days old!`;
        result.classList.add("visible");
    };

    
    
    // result.innerHTML = `You are <span>${y3}</span> years , <span>${m3}</span> months and <span>${d3}</span> days old!`;
    // result.classList.add("visible");
}
function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();
}

btn.addEventListener("click",calcAge); 