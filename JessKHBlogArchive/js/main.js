const lock = document.getElementById("locked")
const lock2 = document.getElementById("locked2")
const lock3 = document.getElementById("locked3")


if (localStorage.getItem('visitedGuestBook') == "true") {
    lock.id = "unlocked";
    if (localStorage.getItem('visitedAboutMe0510') !== "true") {
        document.getElementById("unlocked").style.color = "yellow";
    } if (localStorage.getItem('visitedAboutMe0510') == "true") {
        lock.removeAttribute("id");
    }
}

if (localStorage.getItem('visitedGuestBook0408') == "true") {
    if (localStorage.getItem('visitedGuestBook') == "true") {
        if (localStorage.getItem('visitedGuestBook1231') == "true") {
            localStorage.setItem('visitedAllGuestBook07', 'true')
        }
    }
}

if (localStorage.getItem('visitedAboutMe0329') == "true") {
    if (localStorage.getItem('visitedAboutMe0510') == "true") {
        localStorage.setItem('visitedAllAboutMe07', 'true')
    }
}


if (localStorage.getItem('visitedBlog07') == "true") {
    if (localStorage.getItem('visitedAllGuestBook07') == "true") {
        if (localStorage.getItem('visitedAllAboutMe07') == "true") {
            localStorage.setItem('visitedAll07', 'true')
            lock2.id = "unlocked";
            if (localStorage.getItem('visitedBlog08') !== "true") {
                document.getElementById("unlocked").style.color = "yellow";
            } if (localStorage.getItem('visitedBlog08') == "true") {
                lock2.removeAttribute("id");
            }
        }
    }
}

//Guest Book Flags
//visitedGuestBook0408
//vistedGuestBook
//visitedGuestBook1231
//
//About Me Flags
//vistedAboutMe0329
//vistedAboutMe0510
//
//Blog Flags
//
//visitedBlog07
//
//MasterFlags
//visitedAllGuestBook07
//visitedAllAboutMe07
//visitedAll07


// if (localStorage.getItem('visitedAboutMe0329') == "true") {
//     if (localStorage.getItem('visitedGuestBook') == "true") {
//         if (localStorage.getItem('vistedAboutMe0510') == "true") {
//             if (localStorage.getItem('vistedBlog07') == "true") {

//             }
//         }
//     }
// }

