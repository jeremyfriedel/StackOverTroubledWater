  json.set! @questions do |question|
    json.extract! question, :id, :body, :category_id, :author_id
  end

  # data = {}
# {}
#   $.ajax({
#     method: 'GET',
#     url: 'api/questions',
#     data
#   })

