import comments from "../assets/mock/comments.json";

const COMMENTS_LOAD_DURATION = 1000;

function selectByArticleId(totalData, id) {
    return totalData.filter(({articleId}) => articleId === id)
}

async function getComments(articleId) {
    return new Promise(resolve => {
        const targetComments = selectByArticleId(comments, articleId)
        setTimeout(() => resolve(targetComments), COMMENTS_LOAD_DURATION)
    })
}

export default getComments;