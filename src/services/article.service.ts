import api from "../http-common";

import IArticle from "../types/article.type";

const getAll = async (page: number) => {
  return await api.get<Array<IArticle>>(`/?page=${page}&per_page=30`);
};

const findById = async (article_id: string) => {
  return await api.get<{ article: IArticle }>(`/${article_id}`);
};

const findByTitle = async (title: string) => {
  return await api.get<{ results: IArticle[] }>(`/search?`, {
    params: { query: title },
  });
};

const ArticleService = {
  getAll,
  findById,
  findByTitle,
};

export default ArticleService;
