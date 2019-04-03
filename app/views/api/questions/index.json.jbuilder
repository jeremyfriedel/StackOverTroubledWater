  
  json.array! @questions do |question|
    
    json.extract! question, :id, :title, :category_id, :author_id, :created_at
    json.extract! question.author, :username
    # json.answers @question.answers do |answer|
    #   json.body answer.body
    #   json.author answer.author.username
    #   json.id answer.id
    # end
  end




#   json.set! @questions do |question|
#     json.extract! question, :id, :body, :category_id, :author_id
#   end


# $.ajax({
#     method: 'GET',
#     url: 'api/questions'
#   })
