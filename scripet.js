let name2 = document.getElementById("name2");
let lastName = document.getElementById("lastName");
let country = document.getElementById("country");
let number = document.getElementById("number");
let state = document.getElementById("state");
let city = document.getElementById("city");
let village = document.getElementById("village");
let btnDiv = document.querySelector("#btn");
let btn = document.querySelector("#btn button");
let btnClear = document.querySelector("#btnClear button");


btn.addEventListener("click", () => {
    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Enter your name";



    let lastNameInput = document.createElement("input");
    lastNameInput.type = "text";

    lastNameInput.placeholder = "Enter your last name";

    let countryInput = document.createElement("input");
    countryInput.type = "text";
    countryInput.placeholder = "Enter your country";

    let numberInput = document.createElement("input");
    numberInput.type = "number";
    numberInput.placeholder = "Enter your phone number";

    let stateInput = document.createElement("input");
    stateInput.type = "text";
    stateInput.placeholder = "Enter your state";

    let cityInput = document.createElement("input");
    cityInput.type = "text";


    cityInput.placeholder = "Enter your city";

    let villageInput = document.createElement("input");
    villageInput.type = "text";
    villageInput.placeholder = "Enter your village";



    name2.innerHTML = "Name: ";
    name2.append(nameInput);

    lastName.innerHTML = "Last Name: ";
    lastName.append(lastNameInput);

    country.innerHTML = "Country: ";
    country.append(countryInput);

    number.innerHTML = "Phone Number: ";
    number.append(numberInput);

    state.innerHTML = "State: ";
    state.append(stateInput);

    city.innerHTML = "City: ";


    city.append(cityInput);

    village.innerHTML = "Village: ";
    village.append(villageInput);

    let btn2 = document.createElement("button");
    btn2.innerHTML = "Submit";


    btn.remove();
    btnDiv.append(btn2);


    btn2.addEventListener("click", () => {


        if (nameInput.value === "" || lastNameInput.value === "" || countryInput.value === "" ||
            numberInput.value === "" || stateInput.value === "" || cityInput.value === "" || villageInput.value === "") {

            alert("Please fill in all fields.");
            return;
        }
        localStorage.setItem("name", nameInput.value);

        localStorage.setItem("lastName", lastNameInput.value);
        localStorage.setItem("country", countryInput.value);
        localStorage.setItem("phoneNumber", numberInput.value);
        localStorage.setItem("state", stateInput.value);
        localStorage.setItem("city", cityInput.value);
        localStorage.setItem("village", villageInput.value);

        btnClear.style.display = "block";
        btn2.remove();
        alert("Your details saved");


        nameInput.value = "";
        lastNameInput.value = "";
        countryInput.value = "";
        numberInput.value = "";
        stateInput.value = "";
        cityInput.value = "";
        villageInput.value = "";
    });


});



btnClear.addEventListener("click", () => {
    localStorage.removeItem("name");
    localStorage.removeItem("lastName");
    localStorage.removeItem("country");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("state");
    localStorage.removeItem("city");
    localStorage.removeItem("village");



    alert("All data Clear ");

});
