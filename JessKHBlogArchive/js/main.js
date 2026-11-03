        const lock = document.getElementById("locked")
        const lock2 = document.getElementById("locked2")
        const lock3 = document.getElementById("locked3")


        if (localStorage.getItem('visitedGuestBook') == "true") {
            lock.removeAttribute("id");
        }