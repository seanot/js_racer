get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/player_1/:player1_id/player_2/:player2_id' do
  @player_1 = Player.find(params[:player1_id])
  @player_2 = Player.find(params[:player2_id])
  erb :game
end


#======POST======

post '/login' do
  @player_1 = Player.find_or_create_by_initials(params[:player_1])
  @player_2 = Player.find_or_create_by_initials(params[:player_2])

  redirect to("/player_1/#{@player_1.id}/player_2/#{@player_2.id}")
end
