# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Like.destroy_all
Comment.destroy_all
Answer.destroy_all
Question.destroy_all
User.destroy_all



# 10.times { Category.create!(name: Faker::Lorem.word) }

# Create Users
4.times {
  password = 'password'
  User.create!(
    username: Faker::GreekPhilosophers.unique.name,
    password: password,
  )
}

User.create!( username: 'demoUser',
              password: 'password'
)


# Create Questions
ex1 =  Question.create(
  body: 'In the javascript language what is this?',
  title: 'What is this?',
  author_id: User.all.sample.id

)

ex2 = Question.create(
  body: 'Is it a instrument?',
  title: 'What is React?',
  author_id: User.all.sample.id

)

ex3 = Question.create(
  body: 'Okay?',
  title: 'Does Ruby on Rails have any diesel trains?.',
  author_id: User.all.sample.id

)

ex4 = Question.create(
  body: 'Is there a max?',
  title: 'What is the maximum number of middlewares in applyMiddleware in Redux?',
  author_id: User.all.sample.id

)

ex5 = Question.create(
  body: 'It does?',
  title: 'Why does HTML think "chucknorris" is a color?',
  author_id: User.all.sample.id

)


ex5 = Question.create(
  body: 'Not all just half',
  title: 'Is it possible to apply CSS to half of a character?',
  author_id: User.all.sample.id

)

ex6 = Question.create(
  body:'console.log(++[[]][+[]]+[+[]]) prints 10',
  title: 'Why does ++[[]][+[]]+[+[]] return the string “10”?',
  author_id: User.all.sample.id

)








# 2.times {
#   # category = Category.all.sample
#   author_id = User.all.sample.id
#   Question.create!(
#     body: Faker::GreekPhilosophers.unique.quote,
#     title: Faker::GreekPhilosophers.unique.quote,
#     author_id: author_id,
#   )
# }





# Create Answers
Answer.create(
  body: 'Nobody knows, but its provocative, It gets the people going',
  author_id: User.all.sample.id,
  question_id: ex1.id

)

# Answer.create(
#   body: 'Your absolutely right, CSS is silly and everyone should browse the web on lynx',
#   author_id: User.all.sample.id,
#   question_id: ex2.id

# )

# Answer.create(
#   body: 'CSS is beautiful and I love it and your just a hater! Leave CSS alone!',
#   author_id: User.all.sample.id,
#   question_id: ex2.id

# )





20.times {
  author_id = User.all.sample.id
  question_id = Question.all.sample.id
  Answer.create!(
    body: Faker::GreekPhilosophers.quote,
    author_id: author_id,
    question_id: question_id
  )
}



# Create Comments
20.times {
  author_id = User.all.sample.id
  answer_id = Answer.all.sample.id
  Comment.create!(
    body: Faker::GreekPhilosophers.quote,
    author_id: author_id,
    answer_id: answer_id
  )
}

# Create Likes
i = 1
3.times {
  user_id = User.all[i].id
  answer_id = Answer.all[i].id
  Like.create!(
    upordown: [1,-1].sample,
    user_id: user_id,
    answer_id: answer_id
  )
  i = i + 1
}


