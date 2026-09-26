// This saves the checklist ticks in the browser so they are still
// there when you come back to the page.

// get all the checkboxes on the page
var boxes = document.querySelectorAll(".checklist input");

// go through them one by one
for (var i = 0; i < boxes.length; i++) {
  var box = boxes[i];

  // if this box was saved as ticked before, tick it again
  if (localStorage.getItem(box.id) === "yes") {
    box.checked = true;
  }

  // when a box is ticked or unticked, save the new state
  box.onchange = function () {
    if (this.checked) {
      localStorage.setItem(this.id, "yes");
    } else {
      localStorage.removeItem(this.id);
    }
  };
}
