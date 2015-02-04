// Saves options to localStorage.
function save_options() {
  var autoswitch = document.getElementById("autoswitch").checked;
  var emptyswitch = document.getElementById("emtpyswitch").checked;

  localStorage["autoswitch"] = autoswitch;
  localStorage["emptyswitch"] = emptyswitch;

  // Update status to let user know options were saved.
  var status = document.getElementById("status");
  status.innerHTML = "Options Saved.";
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
}

// Restores select box state to saved value from localStorage.
function restore_options() {
  var autoswitch = localStorage["autoswitch"];

  document.getElementById("autoswitch").checked = (""+autoswitch) == "true";
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
