# json.questions @questions
json.set question.id
    json.partial! 'question', question: Question
end