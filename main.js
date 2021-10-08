"use strict"

function passValue() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    // const dob = document.getElementById("dob").value;
    // const photo = document.getElementById("photo").value;
    // const edu = document.getElementsById("edu").value;
    // const exp = document.getElementsById("exp").value;

    sessionStorage.setItem("Name", name);
    sessionStorage.setItem("Email", email);
    // sessionStorage.setItem("DOB", dob);
    // sessionStorage.setItem("Photo", photo);
    // sessionStorage.setItem("edu", edu);
    // sessionStorage.setItem("exp", exp);

    return false;
}