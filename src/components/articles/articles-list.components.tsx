import React, { useState, useEffect, ChangeEvent } from "react";
import { Link } from "react-router-dom";

import ArticleService from "../../services/article.service";
import IArticle from "../../types/article.type";
import Pagination from "../pagination/pagination";

import { Footer } from "../footer/footer";
import { Loader } from "../loader/loader";

import Logo from "../../assets/logo.svg";
import "./articles-list.scss";

const ArticlesList: React.FC = () => {
  const [data, setData] = useState<Array<IArticle>>([]);
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(21);

  const [searchTitle, setSearchTitle] = useState<string>("");

  const handlePrevPage = (prevPage: number) => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = (nextPage: number) => {
    setPage((nextPage) => nextPage + 1);
  };

  useEffect(() => {
    retrieveArticles();
  }, [page]);

  const retrieveArticles = () => {
    ArticleService.getAll(page)
      .then((res) => {
        setData(res);
        setLoading(false);
        setTotalPages(totalPages);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const onChangeSearchTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const findByTitle = () => {
    ArticleService.findByTitle(searchTitle)
      .then(res => {
        setData(res);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="articles-main-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="/" className="navbar-brand">
              <img src={Logo} alt="CompanyLogo" />
            </a>
            <div className="col-md-5">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by title"
                  value={searchTitle}
                  onChange={onChangeSearchTitle}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={findByTitle}>
                    Search by title
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <h2>Articles List</h2>
          <div className="articles-main">
            {error && (
              <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            <div className="list-titles">
              <ul>
                {data?.map((article) => {
                  return (
                    <li key={article.id}>
                      <Link to={`/${article.id}`}>{article.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="pagination">
            <Pagination
              totalPages={totalPages}
              currentPage={page}
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
            />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ArticlesList;
