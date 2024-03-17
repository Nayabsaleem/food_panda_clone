function convertToNewPage(url) {
                  window.location.href = url;
}


    document.getElementById('orderButton').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'block';
    });

    function closePopup() {
        document.getElementById('popup').style.display = 'none';
    }
    function showAlert() {
        alert("Welcome! Select your city below!");
    }