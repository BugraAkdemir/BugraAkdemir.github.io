// script.js
fetch('https://akdemir.xyz/in.php')
  .then(response => response.json())
  .then(data => {
    document.getElementById('dynamic-content').innerText = data.message;
  })
  .catch(error => {
    console.error('Hata:', error);
  });
