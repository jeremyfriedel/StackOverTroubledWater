class Api::AnswersController < ApplicationController
  
  def index
      answers = Answer.all

      @answers = answers.includes(:author, :question)

      render :index
  end

  def show
      @answer = Answer.find(params[:id])
  end

  def create
      @answer = Answer.create!(answer_params)
      render :show
  end

  private

  def answer_params
    params.require(:answer).permit(
      :body, :question_id, :author_id
    )
  end

end
