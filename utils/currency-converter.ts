
export const CURRENCY_RATES: Record<string, number> = {
    "USD": 1,
    "EUR": 0.92,
    "GBP": 0.79,
    "TRY": 32.50,
    "JPY": 151.50,
    "AUD": 1.52,
    "CAD": 1.36,
    "CHF": 0.91,
    "CNY": 7.23,
    "INR": 83.30
};

export const CURRENCY_SYMBOLS: Record<string, string> = {
    "USD": "$",
    "EUR": "€",
    "GBP": "£",
    "TRY": "₺",
    "JPY": "¥",
    "AUD": "A$",
    "CAD": "C$",
    "CHF": "CHF",
    "CNY": "¥",
    "INR": "₹"
};

export function convertCurrency(amount: number, from: string, to: string): number {
    const fromRate = CURRENCY_RATES[from] || 1;
    const toRate = CURRENCY_RATES[to] || 1;

    // Convert to USD first (Base), then to Target
    const amountInUSD = amount / fromRate;
    return amountInUSD * toRate;
}

export function formatCurrency(amount: number, currency: string): string {
    const symbol = CURRENCY_SYMBOLS[currency] || currency;
    return `${symbol}${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
