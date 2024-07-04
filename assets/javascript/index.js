function changeTheme() {
    let themeVal = document.querySelector('input[name="theme"]').checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', themeVal);
  }


  document.addEventListener('DOMContentLoaded', (event) => {
    // Tarayıcıda depolanan sayacı al
    let counter = localStorage.getItem('page_view_count');

    // Sayı yoksa sıfırla başlat
    if (!counter) {
        counter = 0;
    } else {
        counter = parseInt(counter);
    }

    // Sayacı bir artır
    counter++;

    // Yeni değeri depola
    localStorage.setItem('page_view_count', counter);

    // Sayacı göster
    document.getElementById('counter').innerText = counter;
});
