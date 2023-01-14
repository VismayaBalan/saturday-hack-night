// show go top btn when scroll window to 500px

"use strict";
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 500
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});

//sending data to front-end
function onSubmit(e) {
  e.preventDefault();
  document.querySelector("#output").textContent = "";
  document.querySelector(".msg").textContent = "";

  const location = document.querySelector("#location").value;
  const budget = document.querySelector("#budget").value;

  if (location === "") {
    alert("Please add a destination");
    return;
  }

  // console.log(location , budget);
  generateText(location, budget);
}

async function generateText(location, budget) {
  try {
    showSpinner();
    const response = await fetch("/openai/generateData", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        location,
        budget,
      }),
    });

    if (!response.ok) {
      removeSpinner();
      throw new Error("Data could not be generated");
    }

    const data = await response.json();
    // console.log(data.data);
    const tripData = data.data;
    let finaldata = "";
    for (let i = 0; i < tripData.length; i++) {
      console.log(tripData.length);
      //console.log(tripData[i]);
      if (tripData[i] === "\n") {
        finaldata = finaldata + "\n \n <br> ";
      } else {
        finaldata += tripData[i];
      }
    }
    document.querySelector("#output").innerHTML = finaldata;
    removeSpinner();
  } catch (error) {
    document.querySelector(".msg").textContent = error;
  }
}

function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}

function removeSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}

document.querySelector("#text-form").addEventListener("submit", onSubmit);
