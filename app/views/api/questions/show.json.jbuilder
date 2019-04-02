json.extract! @question, :id, :body, :category_id, :author_id
json.username @question.author.username
# json.questions @questions
# json.set! @question.id
#     json.partial! 'question', question: Question
