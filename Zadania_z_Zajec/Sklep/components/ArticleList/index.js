import React from 'react';
import { connect } from 'react-redux';

function ArticleList({ articles }) {
    return (
        <div className="container">
            {articles.map(article => (
                <div>
                    <h1>{article.title}</h1>
                    <div>{article.description}</div>
                    <hr />
                </div>
            ))}
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    articles: state.articles
})

export default connect(mapStateToProps)(ArticleList);