/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo gallery
 *    Variables and functions
 *    Author: Ethan Kenneth Winter
 *    Date:   27 February, 2018

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];
var figureCount = 3;
var autoAdvance = setInterval(rightAdvance, 1000);

function rightArrow(){
  clearInterval(autoAdvance);
  rightAdvance();
}//end rightArrow

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightAdvance() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
  clearInterval(autoAdvance);
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
}

function previewFive(){
  var lastFigure = document.createElement("figure");
    lastFigure.id = "fig5";
    lastFigure.style.zIndex = "5";
    lastFigure.style.position = "absolute";
    lastFigure.style.right = "45px";
    lastFigure.style.top = "67px";

  var lastImage = document.createElement("img");
    lastImage.width = "240";
    lastImage.height = "135";

  var articleEl = document.getElementsByTagName("article")[0];

    lastFigure.appendChild(lastImage);
    //articleEl.appendChild(lastFigure);
    articleEl.insertBefore(lastFigure, document.getElementById("rightarrow"));

  var firstFigure = lastFigure.cloneNode(true);

    firstFigure.id = "fig1";
    firstFigure.style.right = "";
    firstFigure.style.left = "45px";

    //articleEl.appendChild(firstFigure);
    articleEl.insertBefore(firstFigure, document.getElementById("fig2"));

  document.getElementsByTagName("img")[0].src = "images/IMG_0" + photoOrder[0] + "sm.jpg";
    photoOrder[0] + "sm.jpg"
  document.getElementsByTagName("img")[4].src = "images/IMG_0" + photoOrder[4] + "sm.jpg";
    photoOrder[4] + "sm.jpg"
    figureCount = 5;

  var numberButton = document.querySelector("#fiveButton p");

  numberButton.innerHTML = "Show Fewer Images";

  removeEvent(numberButton, "click", previewFive);
  addEvent(numberButton, "click", previewThree);


  }//end function previewFive

function previewThree(){
  var articleEl = document.getElementsByTagName("article")[0];
  var numberButton = document.querySelector("#fiveButton p");

  articleEl.removeChild(document.getElementById("fig1"));
  articleEl.removeChild(document.getElementById("fig5"));

  figureCount = 3;
  numberButton.innerHTML = "Show More Images";
  removeEvent(numberButton, "click", previewThree);
  addEvent(numberButton, "click", previewFive);


}//end function previewThree

/* open center figure in separate window */
function zoomFig() {
  var zoomWindow = window.open("zoom.htm", "zoomwin", "width=960, height=600");
  zoomWindow.focus();

}

function populateFigures() {
  var filename;
  var currentFig;

  if(figureCount == 3){
    for (var i = 1; i < 4; i++) {
      filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
      currentFig = document.getElementsByTagName("img")[i-1];
      currentFig.src = filename;
    }//end for
  } else {
      for (var i = 0; i < 5; i++) {
        filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
        currentFig = document.getElementsByTagName("img")[i];
        currentFig.src = filename;
      }//end for
    }//end else
  }//end function populateFigures


function createEventListeners() {
  var leftarrow = document.getElementById("leftarrow");
  addEvent(leftarrow, "click", leftArrow);

  var rightarrow = document.getElementById("rightarrow");
  addEvent(rightarrow, "click", rightArrow);

  var mainFig = document.getElementsByTagName("img")[1];
  addEvent(mainFig, "click", zoomFig);

  var showAllButton = document.querySelector("#fiveButton p");
  addEvent(showAllButton, "click", previewFive);
}//end function createEventListeners


/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}//end function setUpPage


/* run setUpPage() function when page finishes loading*/
addEvent(window, "load", setUpPage);

/* run setUpPage() function when page finishes loading
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}
*/
