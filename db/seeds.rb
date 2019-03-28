# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



# 10.times { Category.create!(name: Faker::Lorem.word) }
Question.destroy_all
User.destroy_all
# Create Users
10.times {
  password = 'password'
  User.create!(
    username: Faker::GreekPhilosophers.unique.name,
    password: password,
  )
}


# Create Questions
10.times {
  # category = Category.all.sample
  author_id = User.all.sample.id
  Question.create!(
    body: Faker::GreekPhilosophers.unique.quote,
    author_id: author_id,
  )
}


