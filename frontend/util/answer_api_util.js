
export const getAnswers = () => {
    return $.ajax({
        url: '/api/answers'
    });
};

export const postLikeToAnswer = id => {
    return $.ajax({
        url: '/api/likes',
        method: 'POST',
        data: { id }
    });
};

export const deleteLikeFromAnswer = id => {
    return $.ajax({
        url: '/api/likes',
        method: 'DELETE',
        data: { id }
    });
};

export const postAnswer = answer => {
    return $.ajax({
        url: '/api/answers',
        method: 'POST',
        data: { answer: answer }
    });
};
