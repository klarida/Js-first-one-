/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    function randomize() {
        var rgbcolor;
        red = Math.floor(Math.random() * 250 + 0);
        green = Math.floor(Math.random() * 250 + 0);
        blue = Math.floor(Math.random() * 250 + 0);
      
        rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
        document.body.style.background = rgbColor;
      
        red = ("0" + red.toString(16)).substr(-2).toUpperCase();
        green = ("0" + green.toString(16)).substr(-2).toUpperCase();
        blue = ("0" + blue.toString(16)).substr(-2).toUpperCase();
      }
      
      randomize();
})();

