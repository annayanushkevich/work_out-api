class Api::V1::WorkoutsController < ApplicationController

  def index
    @workouts = WorkOut.all

  end

  def show
    @workout = WorkOut.find_by(id:params[:id])
  end

  def create
    @workout = WorkOut.new(exercise: params[:exercise],time: params[:time], calories_burned: params[:calories_burned])
    # @workout.save
    # render :show #renders to the show.json page
    #can do .assign_attributes and then .save OR .update/.create
    if @workout.save
      render :show
    else
      render json: {errors: @workout.errors.full_messages}, status:422
    end
  end

  def update
    @workout = WorkOut.find_by(id:params[:id])
    @workout.update(exercise: params[:exercise],time: params[:time], calories_burned: params[:calories_burned])
    render :show
  end

  def destroy
    @workout =WorkOut.find_by(id: params[:id])
    @workout.destroy
    render json: "Workout deleted!"
  end

  
end
