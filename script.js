const exchangeRates = {
    USD: { EUR: 0.85, INR: 73.5, JPY: 110 },
    EUR: { USD: 1.18, INR: 86.5, JPY: 129 },
    INR: { USD: 0.014, EUR: 0.012, JPY: 1.49 },
    JPY: { USD: 0.0091, EUR: 0.0077, INR: 0.67 }
};

function calculateExchange() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (amount === "" || isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    if (fromCurrency === toCurrency) {
        document.getElementById("result").innerText = `Result: ${amount} ${toCurrency}`;
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const result = amount * rate;

    document.getElementById("result").innerText = `Result: ${result.toFixed(2)} ${toCurrency}`;
}
