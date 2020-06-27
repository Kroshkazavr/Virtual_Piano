document.addEventListener("keydown", function (event) {
    if (event.code == "KeyA") {
        new Audio("sounds\\white_keys\\A.mp3").play();
    } else if (event.code == "KeyS") {
        new Audio("sounds\\white_keys\\S.mp3").play();
    } else if (event.code == "KeyD") {
        new Audio("sounds\\white_keys\\D.mp3").play();
    } else if (event.code == "KeyF") {
        new Audio("sounds\\white_keys\\F.mp3").play();
    } else if (event.code == "KeyG") {
        new Audio("sounds\\white_keys\\G.mp3").play();
    } else if (event.code == "KeyH") {
        new Audio("sounds\\white_keys\\H.mp3").play();
    } else if (event.code == "KeyJ") {
        new Audio("sounds\\white-keys\\J.mp3").play();
    } else if (event.code == "KeyW") {
        new Audio("sounds\\black_keys\\W.mp3").play();
    } else if (event.code == "KeyE") {
        new Audio("sounds\\black_keys\\E.mp3").play();
    } else if (event.code == "KeyT") {
        new Audio("sounds\\black_keys\\T.mp3").play();
    } else if (event.code == "KeyY") {
        new Audio("sounds\\black_keys\\Y.mp3").play();
    } else if (event.code == "KeyU") {
        new Audio("sounds\\black_keys\\U.mp3").play();
    } else {
        console.log("Wrong kye pressed.")
    }
});