import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Article from "./components/article/article.component";
import ArticlesList from "./components/articles/articles-list.components";
 
const App: React.FC = () => {
  return (
        <BrowserRouter>
          <div className="container mt-3">
            <Routes>
              <Route path="/" element={<ArticlesList />} />
              <Route path="/:id" element={<Article />} />
            </Routes>
          </div>
        </BrowserRouter>
  );
};

export default App;
