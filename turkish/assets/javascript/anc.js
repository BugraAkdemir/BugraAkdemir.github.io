// Hedef tarih
const countDownDate = new Date("2024-07-03T19:00:00Z").getTime();

// Her 1 saniyede bir geri sayımı güncelle
const x = setInterval(function() {

    // Şu anki tarih ve saat
    const now = new Date().getTime();
    
    // Aralarındaki fark
    const distance = countDownDate - now;
    
    // Günler, saatler, dakikalar ve saniyeler hesapla
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // HTML'e güncelle
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    
    // Eğer geri sayım bitti ise, mesajı göster
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "<h2>Countdown Finished!!</h2>";
    }
}, 1000);
