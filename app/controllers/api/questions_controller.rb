class Api::QuestionsController < ApplicationController
  
  def index
      questions = Question.all

      @questions = questions.includes(:author, :answers)

      render :index
  end

  def show
      @question = Question.includes(:author, :answers, :comments, :likes).find(params[:id])

      render :show
  end

  def create
      @question = Question.create!(question_params)
      render :show
  end

  private

  def question_params
    params.require(:question).permit(
      :body, :title, :category_id, :author_id
    )
  end

end
