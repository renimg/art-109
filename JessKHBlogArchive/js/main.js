const lock = document.getElementById("locked")
const lock2 = document.getElementById("locked2")
const lock3 = document.getElementById("locked3")


if (localStorage.getItem('visitedGuestBook') == "true") {
    lock.id = "unlocked";
    if (localStorage.getItem('vistedabtme51007') !== "true") {
    document.getElementById("unlocked").style.color = "yellow";
} if (localStorage.getItem('vistedabtme51007') == "true") {
    lock.removeAttribute("id");
}
}