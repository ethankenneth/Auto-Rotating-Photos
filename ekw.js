/*
  EKW
  */

//addEvent(window, "load", setUpPage)

function addEvent(obj, event, target){
  if (obj.addEventListener) {
    obj.addEventListener(event, target, false);
  } else if (obj.attachEvent)  {
    obj.attachEvent("on" + event, target);
  }
}//end function addEvent

function removeEvent(obj, event, target){
  if (obj.removeEventListener) {
    obj.removeEventListener(event, target, false);
  } else if (obj.detachEvent)  {
    obj.detachEvent("on" + event, target);
  }
}//end function addEvent
/*jQuery
$(document).ready(function() {
    setUpPage();
});
*/
