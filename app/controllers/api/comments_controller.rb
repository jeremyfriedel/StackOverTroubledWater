class Api::CommentsController < ApplicationController
    def show
      @comment = Comment.find(params[:id])
    end

    
    def create
        @comment = Comment.create!(answer_params)
        render :show
    end

    def answer_params
        params.require(:comment).permit(
        :body, :answer_id, :author_id
        )
    end


end
