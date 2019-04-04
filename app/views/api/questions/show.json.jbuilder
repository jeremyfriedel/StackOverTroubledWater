json.extract! @question, :id, :body, :title, :category_id, :author_id, :created_at
json.username @question.author.username
json.answers do
  json.array! @question.answers do |answer|
    json.body answer.body
    json.author answer.author.username
    json.id answer.id
    json.created_at answer.created_at
    json.likes answer.likes do |like|
      json.upordown like.upordown
      json.user_id like.user_id
    end
    json.comments do 
      json.array! answer.comments do |comment|
        json.id comment.id
        json.body comment.body
        json.author comment.author.username
        json.created_at comment.created_at
      end
    end
  end
  
end
# json.questions @questions
# json.set! @question.id
#     json.partial! 'question', question: Question
