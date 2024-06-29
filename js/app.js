let idGet = document.querySelector("#idGet");
let idPreparing = document.querySelector("#idPreparing");
let idDone = document.querySelector("#idDone");
let idgetUserData = document.querySelector("#idgetUserData");

function getUserData(food, drink) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (food && drink) {
                resolve(idGet.innerText = `Customer's Order: ${food}, ${drink}`);
            } else {
                reject("Food or drink not specified");
            }
        }, 1000);
    });
}

function Get() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {    
            resolve(idPreparing.innerText = "Order Taken");
        }, 3000);
    });
}

function Preparing() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve(idDone.innerText = "Preparing and delivering to the customer");
        }, 6000);
    });
}

function Done() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            idgetUserData.innerText = "Orders delivered to customer";
            resolve();
        }, 9000);
    });
}

getUserData("Pizza", "Water")
    .then(() => Get())
    .then(() => Preparing())
    .then(() => Done())
    .catch((err) => console.err(err));
