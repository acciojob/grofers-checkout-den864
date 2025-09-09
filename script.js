const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
    const pricesElement=document.querySelectorAll(".price");

    const sum=
    Array.from(pricesElement).reduce((s,ele)=>{
        s+=Number(ele.textContent);
        return s;
    },0);

    const newRow=document.createElement("tr");

    const td1=document.createElement("td");
    td1.textContent="Total";

    const td2=document.createElement("td");
    td2.textContent=sum;
    // td2.textContent=333;
	td2.id="ans";

    newRow.append(td1,td2);

    document.querySelector("table").appendChild(newRow);

    getSumBtn.style.display="none";
  
};


getSumBtn.addEventListener("click", getSum);

