import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArticleService from "../../services/article.service";
import IArticle from "../../types/article.type";
import { Footer } from "../footer/footer";
import { Loader } from "../loader/loader";

import Logo from "../../assets/logo.svg";
import "./article.scss";

const Article: React.FC = () => {
  const { id } = useParams();

  const [data, setData] = useState<IArticle>();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  const getArticleById = async (id: any) => {
    if (typeof id === "string") {
      setIsLoading(true);
      const response = await ArticleService.findById(id);
      setData(response.data.article);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getArticleById(id);
  }, [id]);

  if (isError) return <p>Boom boy: Error is --{isError}</p>;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="article-main-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a href="/" className="navbar-brand">
              <img src={Logo} alt="CompanyLogo" />
            </a>
          </nav>
          <div className="article-main">
            <h1>{data?.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: `${data?.body}`,
              }}></div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Article;
