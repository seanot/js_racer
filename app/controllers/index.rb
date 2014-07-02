get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/player_1/:player1_id/player_2/:player2_id' do
  @player_1 = Player.find(params[:player1_id])
  @player_2 = Player.find(params[:player2_id])
  erb :game
end

# get '/test_game' do
#   erb :test_game
# end


#======POST======

post '/login' do
  @player_1 = Player.find_or_create_by(name: params[:player_1])
  @player_2 = Player.find_or_create_by(name: params[:player_2])

  redirect to("/player_1/#{@player_1.id}/player_2/#{@player_2.id}")
end

post '/result' do
  player = params[:player_id]
  winning_player = Player.find(params[:player_id]).name
  winning_time = params[:winning_time].to_f / 1000
  game = Game.create(winning_time: params[:winning_time])
  GamePlayer.create(player_id: params[:player_id], game_id: game.id)
  if request.xhr?
    content_type :json
    {player_id: winning_player, winning_time: winning_time}.to_json
  else
    erb :index
  end
end