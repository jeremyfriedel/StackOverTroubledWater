class Like < ApplicationRecord


    validates :upordown, inclusion: { in: [1,-1] }


    belongs_to :user

    belongs_to :answer

end
