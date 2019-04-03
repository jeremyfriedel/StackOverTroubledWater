class Like < ApplicationRecord


    validates :type, presence: true


    belongs_to :user

    belongs_to :answer

end
