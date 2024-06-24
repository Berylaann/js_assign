document.getElementById('interest-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const years = parseFloat(document.getElementById('years').value);
    
    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        alert('Please enter valid numbers');
        return;
    }
    
    const interest = (principal * rate * years) / 100;
    const totalAmount = principal + interest;
    
    document.getElementById('interest-result').innerText = `Interest Earned: $${interest.toFixed(2)}`;
    document.getElementById('total-result').innerText = `Total Amount: $${totalAmount.toFixed(2)}`;
});