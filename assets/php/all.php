<form method="POST" action="">
    <input type="password" name="pin">
    <input type="submit" name="gonder" value="Giriş">
</form>

<?php
if(isset($_POST['gonder'])) {
$dogrulama = "2030";

    if($_POST['pin'] == $dogrulama) {
        echo "Pin girişi doğru, yönlendiriliyorsunuz.";
        //header("Location:panel.php"); yönlendirme için baştaki "//" işaretlerini kaldırıp sayfa adını yazabilirsin.
    } else {
        echo "Pin girişi başarısız.";
    }

}
?>