const plusButton=document.querySelectorAll(".increment");
const minusButton=document.querySelectorAll(".decrement");
const quantitieOfItems = document.querySelectorAll(".value");
const priceOfItems = document.querySelectorAll(".Prix");
const CardBody = document.querySelectorAll(".card-body");
const DeleteBtn = document.querySelectorAll(".btn-danger");
let sumOfTotal = document.querySelector("#sum");


for (let i = 0; i < plusButton.length; i++) {
    plusButton[i].addEventListener("click", function (e) {
      quantitieOfItems[i].innerHTML++;
      sumOfTotal.innerHTML =
        Number(sumOfTotal.innerHTML) + Number(priceOfItems[i].innerHTML);
    });
  }

  for (let i = 0; i < minusButton.length; i++) {
    minusButton[i].addEventListener("click", function (e) {
      if (quantitieOfItems[i].innerHTML>0) {
      quantitieOfItems[i].innerHTML--;
      sumOfTotal.innerHTML =
        Number(sumOfTotal.innerHTML) - Number(priceOfItems[i].innerHTML);
      }
    });
  }
  for (let i = 0; i < priceOfItems.length; i++) {
    priceOfItems[i].addEventListener("click", function (e) {
      quantitieOfItems[i].innerHTML = Number(priceOfItems[i].innerHTML);
      sumOfTotal.innerHTML = Number(priceOfItems[i].innerHTML) * (quantitieOfItems[i].innerHTML);
    });

  }
  for (let i = 0; i < DeleteBtn.length; i++) {
    DeleteBtn[i].addEventListener("click", function (e) {
      CardBody[i].remove();
      sumOfTotal.innerHTML = sumOfTotal.innerHTML -(quantitieOfItems[i].innerHTML) * (priceOfItems[i].innerHTML);
    });
  }

  function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }


        
  
  