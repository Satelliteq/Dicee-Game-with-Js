    //head
    var h1 = document.getElementById("h1");
    h1.style.fontSize = "100px";
    h1.style.fontWeight = "Bold";

    //randomnumber1
    var random1 = Math.floor(Math.random() * 6) + 1;

    //randomnumber2
    var random2 = Math.floor(Math.random() * 6) + 1;


    //randomimage1
    var img1 = document.querySelectorAll("img")[0];

    var randomimage= 'images/dice' + random1 + '.png';

    img1.setAttribute("src", randomimage);


    //randomimage2
    var img2 = document.querySelectorAll("img")[1];

    var randomimage= 'images/dice' + random2 + '.png';

    img2.setAttribute("src", randomimage);

    //who Winner
    if (random1 > random2) {
        h1.innerHTML = "Player 1 Win!";
    }

    else if (random1 < random2) {
        h1.innerHTML = "Player 2 Win!";
    }

    else {
        h1.innerHTML = "Draw!";
    }


