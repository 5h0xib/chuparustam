//Poona Wala Cab service
function getAccessKey() {
  // Store encoded version
  const encoded = 'YjczM2Q1NzItOTYwMC00NmM4LWE0YmYtYmQwMmJmNjJhNTFi';
  // Decode when needed
  return atob(encoded);
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('[name="access_key"]').value = getAccessKey();
});
