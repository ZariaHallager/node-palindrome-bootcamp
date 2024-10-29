document.getElementById('checkButton').addEventListener('click', () => {
    const input = document.getElementById('palindromeInput').value.trim();

    if (input) {
        fetch(`/check?input=${encodeURIComponent(input)}`)
            .then(response => response.json())
            .then(data => {
                const resultDiv = document.getElementById('result');
                resultDiv.classList.remove('hidden');
                resultDiv.innerText = data.message;
            })
            .catch(error => console.error('Error:', error));
    }
});
