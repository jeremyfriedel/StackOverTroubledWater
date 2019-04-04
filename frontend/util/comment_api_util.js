
export const getComments = () => {
    return $.ajax({
        url: '/api/comments'
    });
};

export const postLikeToComment = id => {
    return $.ajax({
        url: '/api/likes',
        method: 'POST',
        data: { id }
    });
};

export const deleteLikeFromComment = id => {
    return $.ajax({
        url: '/api/likes',
        method: 'DELETE',
        data: { id }
    });
};

export const postComment = comment => {
    return $.ajax({
        url: '/api/comments',
        method: 'POST',
        data: { comment: comment }
    });
};

// export const fetchLikes = id => (
//     $.ajax({
//         method: 'GET',
//         url: 'api/likes',
//         data: { like: { comment_id: id } }
//     })
// );


export const createLike = like => (
    $.ajax({
        method: 'POST',
        url: 'api/likes',
        data: { like: like }


    })
);