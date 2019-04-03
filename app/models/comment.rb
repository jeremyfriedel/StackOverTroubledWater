# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  answer_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord


    validates :body, presence: true


    belongs_to :author,
        class_name: 'User'

    belongs_to :answer

end
