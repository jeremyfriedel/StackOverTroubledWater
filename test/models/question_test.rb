# == Schema Information
#
# Table name: questions
#
#  id          :bigint(8)        not null, primary key
#  body        :string           not null
#  category_id :integer          default(1), not null
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  title       :string           not null
#

require 'test_helper'

class QuestionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
