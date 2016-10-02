// Saves options to chrome.storage.sync.
function save_options() {
  var nrama_user = document.getElementById('nrama_user').value;
  var nrama_pw = document.getElementById('nrama_pw').value;
  chrome.storage.sync.set({
    nrama_user: nrama_user,
    nrama_pw: nrama_pw
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    nrama_user: '',
    nrama_pw : ''
  }, function(items) {
    document.getElementById('nrama_user').value = items.nrama_user;
    document.getElementById('nrama_pw').value = items.nrama_pw;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);