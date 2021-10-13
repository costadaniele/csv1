function mousePressed() {

    play1 = 7 - play1;
    if (isHitRect(mouseX, mouseY, width / 2 - 100, height - 510, 165, 165)) {
        song1.play();
    }

    play2 = 5 - play2;
    if (isHitRect(mouseX, mouseY, width / 2 + 100, height - 510, 165, 165)) {
        song2.play();
    }

    play3 = 9 - play3;
    if (isHitRect(mouseX, mouseY, width / 2 - 100, height / 2, 165, 165)) {
        song3.play();
    }

    play4 = 1 - play4;
    if (isHitRect(mouseX, mouseY, width / 2 + 100, height / 2, 165, 165)) {
        song4.play();
    }

    play5 = 11 - play5;
    if (isHitRect(mouseX, mouseY, width / 2 - 100, height - 150, 165, 165)) {
        song5.play();
    }

    play6 = 3 - play6;
    if (isHitRect(mouseX, mouseY, width / 2 + 100, height - 150, 165, 165)) {
        song6.play();
    }

    play7 = 13 - play7;
    if (isHitRect(mouseX, mouseY, width / 5 + 110, height / 2, 165, 165)) {
        song7.play();
    }

    play8 = 15 - play8;
    if (isHitRect(mouseX, mouseY, width / 5 + 110, height - 150, 165, 165)) {
        song8.play();
    }
    
    play9 = 17 - play9;
    if (isHitRect(mouseX, mouseY, width / 5 + 110, height - 510, 165, 165)) {
        song9.play();
    }

    play10 = 19 - play10;
    if (isHitRect(mouseX, mouseY, width / 5 - 100, height / 2, 165, 165)) {
        song10.play();
    }

    play11 = 21 - play11;
    if (isHitRect(mouseX, mouseY, width / 5 - 100, height - 150, 165, 165)) {
        song11.play();
    }

    play12 = 23 - play12;
    if (isHitRect(mouseX, mouseY, width / 5 - 100, height - 510, 165, 165)) {
        song12.play();
    }

    play13 = 25 - play13;
    if (isHitRect(mouseX, mouseY, width / 5 + 700, height / 2, 165, 165)) {
        song13.play();
    } 

    play14 = 27 - play14;
    if (isHitRect(mouseX, mouseY, width / 5 + 700, height - 150, 165, 165)) {
        song14.play();
    } 

    play15 = 29 - play15;
    if (isHitRect(mouseX, mouseY, width / 5 + 700, height - 510, 165, 165)) {
        song15.play();
    } 

    play16 = 31 - play16;
    if (isHitRect(mouseX, mouseY, width / 5 + 900, height / 2, 165, 165)) {
        song16.play();
    } 

    play17 = 33 - play17;
    if (isHitRect(mouseX, mouseY, width / 5 + 900, height - 150, 165, 165)) {
        song17.play();
    } 

    play18 = 35 - play18;
    if (isHitRect(mouseX, mouseY, width / 5 + 900, height - 510, 165, 165)) {
        song18.play();
    } 

    if (index === col.length) {
        index = 0;
    }
}


