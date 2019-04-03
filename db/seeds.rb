# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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


# Create Questions
2.times {
  # category = Category.all.sample
  author_id = User.all.sample.id
  Question.create!(
    body: Faker::TvShows::Simpsons.unique.quote,
    title: Faker::GreekPhilosophers.unique.quote,
    author_id: author_id,
  )
}


# Create Answers
8.times {
  author_id = User.all.sample.id
  question_id = Question.all.sample.id
  Answer.create!(
    body: Faker::TvShows::Simpsons.unique.quote,
    author_id: author_id,
    question_id: question_id
  )
}
