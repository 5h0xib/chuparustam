function getAccessKey() {
  // Split and reverse approach
  const keyParts = [
    '64dc', 'e12aee', 'c2', '33', 'bd', 
    'db', '41', '27', '2a', 'd6', '58', 'b0', '66'
  ];
  
  // Reconstruct in correct order
  return [
    keyParts[12] + keyParts[11] + keyParts[10] + keyParts[9],
    keyParts[8] + keyParts[7],
    keyParts[6] + keyParts[5],
    keyParts[4] + keyParts[3],
    keyParts[2] + keyParts[1] + keyParts[0]
  ].join('-');
}

document.addEventListener('DOMContentLoaded', function() {
  const field = document.querySelector('[name="access_key"]');
  if (field) {
    field.value = getAccessKey();
    console.log('Access key set dynamically');
  }
});