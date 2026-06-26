# quotes-api
![](https://img.shields.io/badge/Javascript-e4a125?style=for-the-badge&logo=javascript&logoColor=white)

A lightweight, static movie quotes API hosted on GitHub Pages. Data is sourced from a local JSON file and exposed via an ES module that can be imported by any web application.

## Project Structure

```
quotes-api/
├── api.js              # ES module with query functions
├── server.sh           # Local development server script
├── data/
│   └── movies.json     # Quote dataset
└── bin/
    ├── certs.sh        # Generates a self-signed TLS certificate
    └── https.py        # HTTPS server with CORS support
```

## API Module

The module `api.js` is publicly available via GitHub Pages. Import it directly in any ES-module-compatible script:

```js
import {getRandomQuote, getAllQuotes, getQuoteByMovie, getQuoteByMovies, searchQuotes, getQuotesByYear} from "https://tiagomiguelcs.github.io/quotes-api/api.js";
```

### Available Functions

| Function | Description |
|---|---|
| `getAllQuotes()` | Returns all quotes |
| `getRandomQuote()` | Returns a single random quote |
| `getQuoteByMovie(movie)` | Returns a random quote matching the movie title (case-insensitive) |
| `getQuoteByMovies(movies)` | Returns a random quote matching any movie title in the provided array (case-insensitive) |
| `searchQuotes(text)` | Returns all quotes whose text contains the search string (case-insensitive) |
| `getQuotesByYear(year)` | Returns all quotes from a given year |

All functions are `async` and return plain objects from `data/movies.json`:

```json
{
  "quote": "Do, or do not. There is no try.",
  "movie": "Star Wars: Episode V - The Empire Strikes Back",
  "type": "movie",
  "year": 1980
}
```

### Usage Example

```js
import { getRandomQuote } from "https://tiagomiguelcs.github.io/quotes-api/api.js";
try {
    const quote = await getRandomQuote();
    const { quote: text, movie, year } = quote;
    console.log(`"${text}" (${movie}, ${year})`);
} catch (error) {
    console.error(error);
    throw error; 
}
```

## Data Source

The movie quotes dataset was originally sourced from [prasertcbs/basic-dataset](https://github.com/prasertcbs/basic-dataset).
