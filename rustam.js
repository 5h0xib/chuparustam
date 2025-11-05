
function getAccessKey() {
  // Store encoded version
  const encoded = 'NjZiMDU4ZDYtMmEyNy00MWRiLWJkMzMtYzJlMTJhZWU2NGRj';
  // Decode when needed
  return atob(encoded);
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('[name="access_key"]').value = getAccessKey();
});
