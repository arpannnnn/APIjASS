const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/jpy.json"


const dropdowns = document.querySelectorAll(".dropdown select");
const btn = documnt.querySelector("form button");

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
         if(select.name ==="from" && currCode === "USD"){
            newOption.selected="selected";
         }else if (select.name === "to" && currCode === "NPR"){
            newOption.selected= "selected";
         }
        select.append(newOption);
    }
     select.addEventListener("change",(evt)  => {
          updateFlag(evt.target);
     });
}


    const updateFlag = (element) =>{
       let currCode = element.value;
       let countryCode = countryList[currCode];
       let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
       let img = element.parentElement.querySelector("img");
       img.src = newSrc;

    }