import dotenv from 'dotenv';
dotenv.config();

import axios from 'axios';

const techKeywords = [
  'tecnologia', 'tech', 'software', 'hardware', 'inovação', 'startup', 'IA', 'inteligência artificial',
  'machine learning', 'computador', 'internet', 'aplicativo', 'app', 'programação', 'robótica', 'cloud', 'nuvem'
];

function filterTechNews(newsList) {
  return newsList.filter(newsItem => {
    const text = `${newsItem.title || ''} ${newsItem.description || ''} ${newsItem.content || ''}`.toLowerCase();
    return techKeywords.some(keyword => text.includes(keyword));
  });
}

let cachedNews = null;

export async function getDailyNews() {
  if (cachedNews) {
    return cachedNews;
  }

  const endpoint = `https://newsdata.io/api/1/latest?apikey=${process.env.NEWSDATA_API_KEY}&category=technology&image=1&removeduplicate=1&size=5&language=pt&country=br`;

  try {
    const res = await axios.get(endpoint);
    const allNews = res.data.results || [];
    const filteredNews = filterTechNews(allNews);
    cachedNews = filteredNews;
    return cachedNews;
  } catch (err) {
    console.error('Erro ao buscar notícias:', err?.response?.data || err.message);
    throw err;
  }
}
