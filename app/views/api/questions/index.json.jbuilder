  json.set! @questions do |question|
    json.extract! question, :id, :body, :category_id, :author_id
  end