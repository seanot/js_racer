class Player < ActiveRecord::Base
  has_many :game_players
  has_many :games, through: :game_players

  validates :initials, uniqueness: true

  
end
