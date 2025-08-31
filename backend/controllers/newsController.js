import { getDailyNews } from '../services/newsService.js';

export async function news(req, res) {
  try {
    const news = await getDailyNews();
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar notícias' });
  }
}

