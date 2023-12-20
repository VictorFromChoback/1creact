import articles from "../assets/mock/articles.json"

const ARTICLES_LOAD_DURATION = 1500;

async function getArticles() {
    return new Promise(resolve => {
        setTimeout(() => resolve(articles), ARTICLES_LOAD_DURATION)
    })
}

export default getArticles;