   var dom, x, y, finalx = 800, finaly = 0;

// ************************************************* //
// A function to initialize the x and y coordinates
//  of the current position of the text to be moved,
//  and then call the mover function

   function initText() {
      dom = document.getElementById('heading').style;

   /* Get the current position of the text */

      var x = dom.left;
      var y = dom.top;

   /* Convert the string values of left and top to
      numbers by stripping off the units */

      x = x.match(/\d+/);
      y = y.match(/\d+/);

   /* Call the function that moves it */
    moveText(x,y);


    /*** end of function initText */
}
// ************************************************* //
// A function to move the text from its original
//  position to (finalx, finaly)

   function moveText(x, y) {

      if (x != finalx)
         if (x > finalx) x--;
         else if (x < finalx) x++;

      if (y != finaly)
         if (y > finaly) y--;
         else if (y < finaly) y++;

      if ((x != finalx) || (y != finaly)) {
         dom.left = x + "px";
         dom.top = y + "px";
         setTimeout("moveText(" + x + "," + y + ")", 1);

         initText2();

       }
     }
//Move text back to original position
 function initText2(){

   var dom2, x2,y2, finalx2=100, finaly2=0;
   dom2 = document.getElementById('heading').style;
