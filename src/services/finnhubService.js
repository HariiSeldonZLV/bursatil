import axios from 'axios';
const API_KEY = 'd6l0mipr01qugeicb6lgd6l0mipr01qugeicb6m0';
const BASE_URL = 'https://finnhub.io/api/v1';
export async function getQuote(symbol) {
    const res = await axios.get(`${BASE_URL}/quote`, {
        params: { symbol, token: API_KEY }
    });
    return res.data;
}
export async function getNews(category = 'general') {
    const res = await axios.get(`${BASE_URL}/news`, {
        params: { category, token: API_KEY }
    });
    return res.data;
}
//# sourceMappingURL=finnhubService.js.map