
export const getQuestions = () => {
  return $.ajax({
    url: '/api/questions'
  });
};

export const postLikeToQuestion = id => {
  return $.ajax({
    url: '/api/likes',
    method: 'POST',
    data: { id }
  });
};

export const deleteLikeFromQuestion = id => {
  return $.ajax({
    url: '/api/likes',
    method: 'DELETE',
    data: { id }
  });
};

export const postQuestion = question => {
  return $.ajax({
    url: '/api/questions',
    method: 'POST',
    data: { question: question } 
  });
};
