// Exchange rates for simple calculation
const exchangeRates = {
    USD: { EUR: 0.85, INR: 73.5, JPY: 110 },
    EUR: { USD: 1.18, INR: 86.5, JPY: 129 },
    INR: { USD: 0.014, EUR: 0.012, JPY: 1.49 },
    JPY: { USD: 0.0091, EUR: 0.0077, INR: 0.67 }
};

function calculateExchange() {
    // Getting values from the HTML form
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    // Validation
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    // If the same currency is selected for both, show the input amount
    if (fromCurrency === toCurrency) {
        document.getElementById("result").innerText = `Result: ${amount} ${toCurrency}`;
        return;
    }

    // Get exchange rate and calculate result
    const rate = exchangeRates[fromCurrency][toCurrency];
    const result = amount * rate;

    // Display the result in the result <h3> tag
    document.getElementById("result").innerText = `Result: ${result.toFixed(2)} ${toCurrency}`;
}
