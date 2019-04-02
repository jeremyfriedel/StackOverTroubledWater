json.extract! @question, :id, :body, :category_id, :author_id
json.username @question.author.username
json.answers @question.answers do |answer|
  json.body answer.body
  json.author answer.author.username
  json.id answer.id
end
# json.questions @questions
# json.set! @question.id
#     json.partial! 'question', question: Question
