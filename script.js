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

    // Check if same currency is selected for both
    if (fromCurrency === toCurrency) {
        document.getElementById("result").innerText = `Result: ${amount} ${toCurrency}`;
        return;
    }

    // Retrieve exchange rate
    const rate = exchangeRates[fromCurrency] ? exchangeRates[fromCurrency][toCurrency] : null;

    // Log the exchange rate and amount for debugging
    console.log("Amount:", amount);
    console.log("From Currency:", fromCurrency);
    console.log("To Currency:", toCurrency);
    console.log("Exchange Rate:", rate);

    // Check if rate is found, then calculate
    if (rate) {
        const result = amount * rate;
        document.getElementById("result").innerText = `Result: ${result.toFixed(2)} ${toCurrency}`;
    } else {
        document.getElementById("result").innerText = "Conversion rate not available.";
    }
}
