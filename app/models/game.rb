class Game < ActiveRecord::Base
  has_many :game_players
  has_many :players, through: :game_players

  # validate :game_has_two_players


  def game_has_two_players
    # if GamePlayer.game_id unique
      # errors.add("Must have two players to play a game.")
    # end
  end
end
