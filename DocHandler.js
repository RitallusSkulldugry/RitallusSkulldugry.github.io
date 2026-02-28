
document.getElementById('F').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('output').textContent = e.target.result;
    };

    reader.readAsText(file); // Reads file as plain text
});


