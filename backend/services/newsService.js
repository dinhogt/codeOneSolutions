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

function mapNewsWithImage(newsList) {
  return newsList.map(newsItem => ({
    ...newsItem,
    image_url: newsItem.image_url || newsItem.image || (newsItem.media && newsItem.media.images && newsItem.media.images.length > 0 ? newsItem.media.images[0].url : null)
  }));
}

let cachedNews = null;

export async function getDailyNews() {
  if (cachedNews) {
    return cachedNews.slice(0, 3);
  }

  //const endpoint = `https://newsdata.io/api/1/latest?apikey=${process.env.NEWSDATA_API_KEY}&category=technology&excludecategory=top&image=1&removeduplicate=1&size=5&language=pt&country=br`;
  //const endpoint = `https://api.mediastack.com/v1/sources?access_key=${process.env.MEDIASTACK_API_KEY}&category=technology&languages=pt`;
  const endpoint = `https://api.apitube.io/v1/news/everything?per_page=10&api_key=${process.env.APITUBE_API_KEY}&language.code=pt&category.id=medtop:20000225&media.images.count=1`;

  try {
    const res = await axios.get(endpoint);
    const allNews = res.data.results || [];
    const filteredNews = filterTechNews(allNews);
    const newsWithImages = mapNewsWithImage(filteredNews);
    cachedNews = newsWithImages.slice(0, 3);
    return cachedNews;
  } catch (err) {
    console.error('Erro ao buscar notícias:', err?.response?.data || err.message);
    throw err;
  }
}
