class Api::Questions Controller < ApplicationController
  def index
      questions = questions.all

      @questions = questions.includes(:author)

      render :index
  end

  def show
      @question = Question.find(params[:id])
  end

  def create
      @question = Question.create!(question_params)
      render :show
  end

  private

  def question_params
    params.require(:question).permit(
      :body, :category_id, :author_id
    )
  end
end