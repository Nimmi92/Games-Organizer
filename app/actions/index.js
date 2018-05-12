export const selectedGame = (game) => {
	return {
		type: "GAME_SELECTED",
		payload: game
	}
}