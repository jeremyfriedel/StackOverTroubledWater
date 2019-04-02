  
  json.array! @answers do |answer|
    
    json.extract! answer, :id, :body, :question_id, :author_id, :created_at
    json.extract! answer.author, :username
    json.question_body answer.question.body
    json.question_author answer.question.author.username
  end




#   json.set! @answers do |answer|
#     json.extract! answer, :id, :body, :category_id, :author_id
#   end


# $.ajax({
#     method: 'GET',
#     url: 'api/answers'
#   })
