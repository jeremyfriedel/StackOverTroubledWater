class Api::LikesController < ApplicationController

  
  def create
      @like = Like.create!(likes_params)
      render json: {success: "success"}
  end



  def likes_params
    params.require(:like).permit(
      :user_id, :answer_id, :upordown
    )
  end

end