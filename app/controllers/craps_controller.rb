class CrapsController < ApplicationController

  def index
    render json: Crap.all
  end


  def create
    render json: Crap.create(create_params)
  end


  def update
    crap = Crap.find(params[:id])
    crap.update(create_params)
    render json: crap
  end


  def destroy
    crap = Crap.find(params[:id])
    crap.destroy
    render nothing: true, status: 200
  end


  private


  def create_params
    params.require(:crap).permit(:text)
  end

end
