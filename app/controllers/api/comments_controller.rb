class Api::CommentController < ApplicationController
    def create
        @comment = Comment.create!(answer_params)
        render json: {success: "success"}
    end

    def answer_params
        params.require(:comment).permit(
        :body, :answer_id, :author_id
        )
    end


end
