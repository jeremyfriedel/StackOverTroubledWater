export const selectAllQuestions = state => {
  
  const questionKeys = Object.keys(state.entities.questions);
  const allQuestions = [];
  questionKeys.forEach(i => {
    const questKey = questionKeys[i];
    const question = state.entities.questions[questKey];
    allQuestions.push(question);
  });
  return allQuestions;
};