class WorkOut < ActiveRecord::Base
  has_many :exercises
  validates :exercise, presence: true
  validates :time, presence: true
  validates :calories_burned, presence: true
end
