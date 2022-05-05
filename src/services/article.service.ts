import api from "../http-common";

import IArticle from "../types/article.type";

const parseArticlesData = function (data: IArticle[]) {
  return data.map((article) => {
    return { id: article.id, title: article.title };
  });
};

const getAll = (page: number): Promise<any> => {
  return new Promise((resolve) =>
    api
      .get(`/?page=${page}&per_page=30`)
      .then((res) => resolve(parseArticlesData(res.data.articles)))
  );
};

const parseArticleData = function (data: any) {
  return {
    id: data.id,
    title: data.title,
    body: data.body,
  };
};

const findById = (article_id: string): Promise<IArticle> => {
  return new Promise((resolve) =>
    api
      .get<{ article: IArticle }>(`/${article_id}`)
      .then((res) => resolve(parseArticleData(res.data.article)))
  );
};

const parseArticlesDataByTitle = function (data: IArticle[]) {
  return data.map((article) => {
    return { id: article.id, title: article.title };
  });
};

const findByTitle = (title: string): Promise<any> => {
  return new Promise((resolve) =>
    api
      .get<{ results: IArticle[] }>(`/search?`, {
        params: { query: title },
      })
      .then((res) => resolve(parseArticlesDataByTitle(res.data.results)))
  );
};

const ArticleService = {
  getAll,
  findById,
  findByTitle,
};

export default ArticleService;
