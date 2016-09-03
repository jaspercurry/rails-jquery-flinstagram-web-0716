class PicturesController < ApplicationController

  def index
    @pictures = Picture.all
  end

  def like

    @picture = Picture.find(params[:id])
    @picture.update_likes(current_user)
    respond_to do |format|
      format.html { redirect_to root_path }
      format.json { render json: { id: @picture.id, class: @picture.heart_class(current_user), content: @picture.likes_message(current_user)}}
    end
  end

end
