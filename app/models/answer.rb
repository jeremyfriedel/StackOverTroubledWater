# == Schema Information
#
# Table name: answers
#
#  id          :bigint(8)        not null, primary key
#  body        :string           not null
#  author_id   :integer          not null
#  question_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Answer < ApplicationRecord

    validates :body, presence: true


    belongs_to :author,
        class_name: 'User'

    belongs_to :question

    has_many :comments

end
