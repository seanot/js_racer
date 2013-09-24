class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :winning_time
      t.string :game_url
      t.timestamps
    end
  end
end
