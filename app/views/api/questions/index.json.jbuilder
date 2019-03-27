@questions.each do |question|
  json.set! question.id
    json.partial! 'question', question: Question
  end
end