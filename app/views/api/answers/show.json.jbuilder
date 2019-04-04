json.extract! @answer, :id, :body, :question_id, :author_id
json.likes @answer.likes do |like|
  json.upordown like.upordown
  json.user_id like.user_id
end
# json.answers @answers
# json.set! @answer.id
#     json.partial! 'answer', answer: Question
