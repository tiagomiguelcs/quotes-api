const BASE_URL = new URL(".", import.meta.url).origin;
const DATA_URL = `${BASE_URL}/quotes-api/data/movies.json`;

async function loadQuotes() {
    const response = await fetch(DATA_URL);
    if (!response.ok)
        throw new Error("Unable to load quotes.");
    return await response.json();
}

export async function getAllQuotes() {
    return await loadQuotes();
}

export async function getRandomQuote() {
    const quotes = await loadQuotes();
    return quotes[Math.floor(Math.random() * quotes.length)];
}

export async function getQuoteByMovie(movie) {
    const quotes = await loadQuotes();
    return quotes.find(
        q => q.movie.toLowerCase() === movie.toLowerCase() || q.movie.toLowerCase().includes(movie.toLowerCase())
    );
}

export async function searchQuotes(text) {
    const quotes = await loadQuotes();
    return quotes.filter(q => q.quote.toLowerCase().includes(text.toLowerCase())
    );
}

export async function getQuotesByYear(year) {
    const quotes = await loadQuotes();
    return quotes.filter(q => q.year === year);
}