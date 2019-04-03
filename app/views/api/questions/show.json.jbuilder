json.extract! @question, :id, :body, :title, :category_id, :author_id, :created_at
json.username @question.author.username
json.answers @question.answers do |answer|
  json.body answer.body
  json.author answer.author.username
  json.id answer.id
  json.created_at answer.created_at
end
# json.questions @questions
# json.set! @question.id
#     json.partial! 'question', question: Question
