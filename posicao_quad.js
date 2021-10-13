function draw() {
    background('black');
    noCursor();
    noStroke();
    fill('#c3015eff');
    circle(mouseX, mouseY, 7);

    //rect
    push();
    noFill();
    stroke('#c3015eff');
    strokeWeight(1);

/*    drawRect(width / 2 - 100, height - 510, 165, 165); //song1
    drawRect(width / 2 + 100, height - 510, 165, 165); //song2
    drawRect(width / 2 - 100, height / 2, 165, 165); //song3
    drawRect(width / 2 + 100, height / 2, 165, 165); //song4
    drawRect(width / 2 - 100, height - 150, 165, 165); //song5
    drawRect(width / 2 + 100, height - 150, 165, 165); //song6
    drawRect(width / 5 + 110, height / 2, 165, 165); //song7
    drawRect(width / 5 + 110, height - 150, 165, 165); //song8
    drawRect(width / 5 + 110, height - 510, 165, 165); //song9
    drawRect(width / 5 - 100, height / 2, 165, 165); // song10
    drawRect(width / 5 - 100, height - 150, 165, 165); //song11
    drawRect(width / 5 - 100, height - 510, 165, 165); //song12
    drawRect(width / 5 + 700, height / 2, 165, 165); //song13
    drawRect(width / 5 + 700, height - 150, 165, 165); //song14 
    drawRect(width / 5 + 700, height - 510, 165, 165); //song15
    drawRect(width / 5 + 900, height / 2, 165, 165); //song16
    drawRect(width / 5 + 900, height - 150, 165, 165); //song17
    drawRect(width / 5 + 900, height - 510, 165, 165); // song18 */

    pop();

    //song1
    push();
    translate(width / 2 - 100, height - 510);
    fill(255);
    stroke(255);
    textFont('Helvetica');
    textSize(15);
    textAlign(CENTER, CENTER);
  //  text('1', 0, 0);
    rotate(angle);
    angle = angle + map(height, 0, width, -0.5, 0.5);

    noFill();

    stroke('#c3015eff');
    strokeWeight(1);
    if (isHitRect(mouseX, mouseY, width / 2 - 100, height - 510, 165, 165)) {
        for (let i = 0; i < cirNum; i++) {
            arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle / 3 * i, 540 - angle / 2)
        }
    }
    else {
        for (let i = 0; i < cirNum; i++) {
            circle(0, 0, cirSize + gap * i)
        }
    }
    pop();


    //song2
    push();
    translate(width / 2 + 100, height - 510); // quad-02
    fill(255);
    stroke(255);
    textFont('Helvetica');
    textSize(15);
    textAlign(CENTER, CENTER);
  //  text('2', 0, 0);
    rotate(angle);
    angle = angle + map(height, 0, width, -0.5, 0.5);

    noFill();

    stroke('#c3015eff');
    strokeWeight(1);
    if (isHitRect(mouseX, mouseY, width / 2 + 100, height - 510, 165, 165)) {
        for (let i = 0; i < cirNum; i++) {
            arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle / 3 * i, 540 - angle / 2)
        }
    }
    else if (play3 == 5) {
        for (let i = 0; i < cirNum; i++) {
            circle(0, 0, cirSize + gap * i)
        }
    }
    else {
        for (let i = 0; i < cirNum; i++) {
            circle(0, 0, cirSize + gap * i)
        }
    }
    pop();

    //song3
    push();
    translate(width / 2 - 100, height / 2);
    fill(255);
    stroke(255);
    textFont('Helvetica');
    textSize(15);
    textAlign(CENTER, CENTER);
   // text('3', 0, 0);
    rotate(angle);
    angle = angle + map(height, 0, width, -0.5, 0.5);

    noFill();

    stroke('#c3015eff');
    strokeWeight(1);
    if (isHitRect(mouseX, mouseY, width / 2 - 100, height / 2, 165, 165)) {
        for (let i = 0; i < cirNum; i++) {
            arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle / 3 * i, 540 - angle / 2)
        }
    }
    else {
        for (let i = 0; i < cirNum; i++) {
            circle(0, 0, cirSize + gap * i)
        }
    }
    pop();

    //song04
    push();
    translate(width / 2 + 100, height / 2);
    fill(255);
    stroke(255);
    textFont('Helvetica');
    textSize(15);
    textAlign(CENTER, CENTER);
   // text('4', 0, 0);
    rotate(angle);
    angle = angle + map(height, 0, width, -0.5, 0.5);

    noFill();

    stroke('#c3015eff');
    strokeWeight(1);
    if (isHitRect(mouseX, mouseY, width / 2 + 100, height / 2, 165, 165)) {
        for (let i = 0; i < cirNum; i++) {
            arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle / 3 * i, 540 - angle / 2)
        }
    }

    else if (play1 == 1) {
        for (let i = 0; i < cirNum; i++) {
            circle(0, 0, cirSize + gap * i)
        }
    }
    else {
        for (let i = 0; i < cirNum; i++) {
            circle(0, 0, cirSize + gap * i)
        }
    }

    pop();

    //song5
    push();

    translate(width / 2 - 100, height - 150);
    fill(255);
    stroke(255);
    textFont('Helvetica');
    textSize(15);
    textAlign(CENTER, CENTER);
  //  text('5', 0, 0);
    rotate(angle);
    angle = angle + map(height, 0, width, -0.5, 0.5);

    noFill();

    stroke('#c3015eff');
    strokeWeight(1);
    if (isHitRect(mouseX, mouseY, width / 2 - 100, height - 150, 165, 165)) {
        for (let i = 0; i < cirNum; i++) {
            arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle / 3 * i, 540 - angle / 2)
        }
    }
    else {
        for (let i = 0; i < cirNum; i++) {
            circle(0, 0, cirSize + gap * i)
        }
    }


    pop();

    //song6
    push();
    translate(width / 2 + 100, height - 150); //circulo
    fill(255);
    stroke(255);
    textFont('Helvetica');
    textSize(15);
    textAlign(CENTER, CENTER);
  //  text('6', 0, 0);
    rotate(angle);
    angle = angle + map(height, 0, width, -0.5, 0.5);

    noFill();

    stroke('#c3015eff');
    strokeWeight(1);
    if (isHitRect(mouseX, mouseY, width / 2 + 100, height - 100, 165, 165)) {
        for (let i = 0; i < cirNum; i++) {
            arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle / 3 * i, 540 - angle / 2)
        }
    }

    else if (play2 == 3) {
        for (let i = 0; i < cirNum; i++) {
            circle(0, 0, cirSize + gap * i)
        }
    }
    else {
        for (let i = 0; i < cirNum; i++) {
            circle(0, 0, cirSize + gap * i)
        }
    }
    pop();

    //song7

    push();
    translate(width / 5 + 110, height /2); //circulo
    fill(255);
    stroke(255);
    textFont('Helvetica');
    textSize(15);
    textAlign(CENTER, CENTER);
   // text('7', 0, 0);
    rotate(angle);
    angle = angle + map(height, 0, width, -0.5, 0.5);

    noFill();

    stroke('#c3015eff');
    strokeWeight(1);
    if (isHitRect(mouseX, mouseY, width / 5 + 110, height / 2, 165, 165)) {
        for (let i = 0; i < cirNum; i++) {
            arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle / 3 * i, 540 - angle / 2)
        }
    }

    else if (play7 == 13) {
        for (let i = 0; i < cirNum; i++) {
            circle(0, 0, cirSize + gap * i)
        }
    }
    else {
        for (let i = 0; i < cirNum; i++) {
            circle(0, 0, cirSize + gap * i)
        }
    }
    pop();

    //song8

    push();
    translate(width / 5 + 110, height - 150); //circulo
    fill(255);
    stroke(255);
    textFont('Helvetica');
    textSize(15);
    textAlign(CENTER, CENTER);
  //  text('8', 0, 0);
    rotate(angle);
    angle = angle + map(height, 0, width, -0.5, 0.5);

    noFill();

    stroke('#c3015eff');
    strokeWeight(1);
    if (isHitRect(mouseX, mouseY, width / 5 + 110, height - 150, 165, 165)) {
        for (let i = 0; i < cirNum; i++) {
            arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle / 3 * i, 540 - angle / 2)
        }
    }

    else if (play7 == 13) {
        for (let i = 0; i < cirNum; i++) {
            circle(0, 0, cirSize + gap * i)
        }
    }
    else {
        for (let i = 0; i < cirNum; i++) {
            circle(0, 0, cirSize + gap * i)
        }
    }
    pop();

    //song9

    push();
    translate(width / 5 + 110, height - 510); //circulo
    fill(255);
    stroke(255);
    textFont('Helvetica');
    textSize(15);
    textAlign(CENTER, CENTER);
 //   text('9', 0, 0);
    rotate(angle);
    angle = angle + map(height, 0, width, -0.5, 0.5);

    noFill();

    stroke('#c3015eff');
    strokeWeight(1);
    if (isHitRect(mouseX, mouseY, width / 5 + 110, height - 510, 165, 165)) {
        for (let i = 0; i < cirNum; i++) {
            arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle / 3 * i, 540 - angle / 2)
        }
    }

    else if (play7 == 13) {
        for (let i = 0; i < cirNum; i++) {
            circle(0, 0, cirSize + gap * i)
        }
    }
    else {
        for (let i = 0; i < cirNum; i++) {
            circle(0, 0, cirSize + gap * i)
        }
    }
    pop();


     //song10

     push();
     translate(width / 5 - 100, height / 2); //circulo
     fill(255);
     stroke(255);
     textFont('Helvetica');
     textSize(15);
     textAlign(CENTER, CENTER);
  //   text('10', 0, 0);
     rotate(angle);
     angle = angle + map(height, 0, width, -0.5, 0.5);
 
     noFill();
 
     stroke('#c3015eff');
     strokeWeight(1);
     if (isHitRect(mouseX, mouseY, width / 5 - 100, height / 2, 165, 165)) {
         for (let i = 0; i < cirNum; i++) {
             arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle / 3 * i, 540 - angle / 2)
         }
     }
 
     else if (play7 == 13) {
         for (let i = 0; i < cirNum; i++) {
             circle(0, 0, cirSize + gap * i)
         }
     }
     else {
         for (let i = 0; i < cirNum; i++) {
             circle(0, 0, cirSize + gap * i)
         }
     }
     pop();

   

     //song11

     push();
     translate(width / 5 - 100, height - 150); //circulo
     fill(255);
     stroke(255);
     textFont('Helvetica');
     textSize(15);
     textAlign(CENTER, CENTER);
 //    text('11', 0, 0);
     rotate(angle);
     angle = angle + map(height, 0, width, -0.5, 0.5);
 
     noFill();
 
     stroke('#c3015eff');
     strokeWeight(1);
     if (isHitRect(mouseX, mouseY, width / 5 - 100, height - 150, 165, 165)) {
         for (let i = 0; i < cirNum; i++) {
             arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle / 3 * i, 540 - angle / 2)
         }
     }
 
     else if (play7 == 13) {
         for (let i = 0; i < cirNum; i++) {
             circle(0, 0, cirSize + gap * i)
         }
     }
     else {
         for (let i = 0; i < cirNum; i++) {
             circle(0, 0, cirSize + gap * i)
         }
     }
     pop();
 

     //song12

     push();
     translate(width / 5 - 100, height - 510); //circulo
     fill(255);
     stroke(255);
     textFont('Helvetica');
     textSize(15);
     textAlign(CENTER, CENTER);
  //  text('12', 0, 0);
     rotate(angle);
     angle = angle + map(height, 0, width, -0.5, 0.5);
 
     noFill();
 
     stroke('#c3015eff');
     strokeWeight(1);
     if (isHitRect(mouseX, mouseY, width / 5 - 100, height - 510, 165, 165)) {
         for (let i = 0; i < cirNum; i++) {
             arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle / 3 * i, 540 - angle / 2)
         }
     }
 
     else if (play7 == 13) {
         for (let i = 0; i < cirNum; i++) {
             circle(0, 0, cirSize + gap * i)
         }
     }
     else {
         for (let i = 0; i < cirNum; i++) {
             circle(0, 0, cirSize + gap * i)
         }
     }
     pop();
 

     //song13

     push();
     translate(width / 5 + 700, height / 2); //circulo
     fill(255);
     stroke(255);
     textFont('Helvetica');
     textSize(15);
     textAlign(CENTER, CENTER);
  //   text('13', 0, 0);
     rotate(angle);
     angle = angle + map(height, 0, width, -0.5, 0.5);
 
     noFill();
 
     stroke('#c3015eff');
     strokeWeight(1);
     if (isHitRect(mouseX, mouseY, width / 5 + 700, height / 2, 165, 165)) {
         for (let i = 0; i < cirNum; i++) {
             arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle / 3 * i, 540 - angle / 2)
         }
     }
     else {
         for (let i = 0; i < cirNum; i++) {
             circle(0, 0, cirSize + gap * i)
         }
     }
     pop();

    //song14

    push();
    translate(width / 5 + 700, height - 150); //circulo
    fill(255);
    stroke(255);
    textFont('Helvetica');
    textSize(15);
    textAlign(CENTER, CENTER);
  //  text('14', 0, 0);
    rotate(angle);
    angle = angle + map(height, 0, width, -0.5, 0.5);

    noFill();

    stroke('#c3015eff');
    strokeWeight(1);
    if (isHitRect(mouseX, mouseY, width / 5 + 700, height - 150, 165, 165)) {
        for (let i = 0; i < cirNum; i++) {
            arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle / 3 * i, 540 - angle / 2)
        }
    }
    else {
        for (let i = 0; i < cirNum; i++) {
            circle(0, 0, cirSize + gap * i)
        }
    }
    pop();

   

    //song15

    push();
    translate(width / 5 + 700, height - 510); //circulo
    fill(255);
    stroke(255);
    textFont('Helvetica');
    textSize(15);
    textAlign(CENTER, CENTER);
  //  text('15', 0, 0);
    rotate(angle);
    angle = angle + map(height, 0, width, -0.5, 0.5);

    noFill();

    stroke('#c3015eff');
    strokeWeight(1);
    if (isHitRect(mouseX, mouseY, width / 5 + 700, height - 510, 165, 165)) {
        for (let i = 0; i < cirNum; i++) {
            arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle / 3 * i, 540 - angle / 2)
        }
    }
    else {
        for (let i = 0; i < cirNum; i++) {
            circle(0, 0, cirSize + gap * i)
        }
    }
    pop();


    //song16

    push();
    translate(width / 5 + 900, height / 2); //circulo
    fill(255);
    stroke(255);
    textFont('Helvetica');
    textSize(15);
    textAlign(CENTER, CENTER);
  //  text('16', 0, 0);
    rotate(angle);
    angle = angle + map(height, 0, width, -0.5, 0.5);

    noFill();

    stroke('#c3015eff');
    strokeWeight(1);
    if (isHitRect(mouseX, mouseY, width / 5 + 900, height / 2, 165, 165)) {
        for (let i = 0; i < cirNum; i++) {
            arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle / 3 * i, 540 - angle / 2)
        }
    }
    else {
        for (let i = 0; i < cirNum; i++) {
            circle(0, 0, cirSize + gap * i)
        }
    }
    pop();

 
    //song17

    push();
    translate(width / 5 + 900, height - 150); //circulo
    fill(255);
    stroke(255);
    textFont('Helvetica');
    textSize(15);
    textAlign(CENTER, CENTER);
   // text('17', 0, 0);
    rotate(angle);
    angle = angle + map(height, 0, width, -0.5, 0.5);

    noFill();

    stroke('#c3015eff');
    strokeWeight(1);
    if (isHitRect(mouseX, mouseY, width / 5 + 900, height - 150, 165, 165)) {
        for (let i = 0; i < cirNum; i++) {
            arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle / 3 * i, 540 - angle / 2)
        }
    }
    else {
        for (let i = 0; i < cirNum; i++) {
            circle(0, 0, cirSize + gap * i)
        }
    }
    pop();



    //song18

    push();
    translate(width / 5 + 900, height - 510); //circulo
    fill(255);
    stroke(255);
    textFont('Helvetica');
    textSize(15);
    textAlign(CENTER, CENTER);
   // text('18', 0, 0);
    rotate(angle);
    angle = angle + map(height, 0, width, -0.5, 0.5);

    noFill();

    stroke('#c3015eff');
    strokeWeight(1);
    if (isHitRect(mouseX, mouseY, width / 5 + 900, height - 510, 165, 165)) {
        for (let i = 0; i < cirNum; i++) {
            arc(0, 0, cirSize + gap * i, cirSize + gap * i, angle / 3 * i, 540 - angle / 2)
        }
    }
    else {
        for (let i = 0; i < cirNum; i++) {
            circle(0, 0, cirSize + gap * i)
        }
    }
    pop();


    //cor de fundo
    push();
    stroke(col[index]);
    strokeWeight(1);
    for (let i = 0; i < 100; i++) {
        point(random(width), random(height));
    } 

    //title
    push();
    fill(col[index]);
    translate(width / 2, height / 2);
    textFont('Helvetica');
    textSize(15);
    textAlign(CENTER, CENTER);

    pop();

    

}

