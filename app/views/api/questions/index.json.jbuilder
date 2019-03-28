  
  json.array! @questions do |question|
    
    json.extract! question, :id, :body, :category_id, :author_id
    json.extract! question.author, :username
  end




#   json.set! @questions do |question|
#     json.extract! question, :id, :body, :category_id, :author_id
#   end


# $.ajax({
#     method: 'GET',
#     url: 'api/questions'
#   })
