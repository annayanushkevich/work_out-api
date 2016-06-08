json.array! @workouts.each do |workout|
json.exercise workout.exercise
json.time workout.time
json.calories_burned workout.calories_burned
json.partial! 'workout.json.jbuilder', workout:workout
end