export default function(state={},action) {
	switch(action.type){
		case 'GAME_SELECTED':
			return action.payload;
			break;

	}
	return state;
}