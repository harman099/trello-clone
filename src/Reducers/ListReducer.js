import {CONSTANTS} from "../Actions";

let listID = 2;
let cardID = 3;

const initialState = [
	{
		title: "Last Episode", 
		id: 0,
		cards: [
			{
				id: 0,
				text: "BlaBlaBlaBLaBla"
			},
			{
				id: 1,
				text: "BlaBl22222222222"
			}
		]
	},
	{
		title: "This Episode", 
		id: 1,
		cards: [
			{
				id: 0,
				text: "Blacsv v ks naBla"
			},
			{
				id: 1,
				text: "Bl33333333322222222"
			},
			{
				id: 2,
				text: "CTCVVjvsajvcjavcliuchknkj"
			}
		]
	}
]


const ListReducer = (state = initialState, action) =>{
	switch(action.type){

		case CONSTANTS.ADD_LIST:
			const newList = {
				title: action.payload,
				cards: [],
				id: listID
			}
			listID += 1;
			return [...state,newList];

		case CONSTANTS.ADD_CARD:
			const newCard ={
				text: action.payload.text,
				id: cardID
			}
			cardID += 1;

			const newState = state.map(list => {
				if(list.id === action.payload.listID){
					return {
						...list,
						cards: [...list.cards, newCard]
					}
				}else{
					return list;
				}
			});
			return newState;

		default:
			return state;
	}
};

export default ListReducer;