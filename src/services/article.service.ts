import api from "../http-common";

import IArticle from "../types/article.type";

const parseArticleData = function (data: IArticle) {
  return {
    id: data.id,
    title: data.title,
    body: data.body,
  };
};

const getAll = (page: number): Promise<IArticle[]> => {
  return new Promise((resolve) =>
    api.get(`/?page=${page}&per_page=30`).then((res) =>
      resolve(
        res.data.articles.map((article: IArticle) => {
          return parseArticleData(article);
        })
      )
    )
  );
};

const findById = (article_id: string): Promise<IArticle> => {
  return new Promise((resolve) =>
    api
      .get<{ article: IArticle }>(`/${article_id}`)
      .then((res) => resolve(parseArticleData(res.data.article)))
  );
};

const findByTitle = (title: string): Promise<any> => {
  return new Promise((resolve) =>
    api
      .get(`/search?`, {
        params: { query: title },
      })
      .then((res) => resolve(
        resolve(
          res.data.results.map((article: IArticle) => {
            return parseArticleData(article);
          })
        )
      )
    )
  );
};

const ArticleService = {
  getAll,
  findById,
  findByTitle,
};

export default ArticleService;
