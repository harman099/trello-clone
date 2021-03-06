import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton'

const TrelloList = ({title ,cards, listID}) =>{
	return(
		<div style = {styles.container}>
		<h4>{title}</h4>
		{ cards.map(card =>(
		 <TrelloCard key={card.id} text ={card.text} />
		))}
		<TrelloActionButton listID={listID} />
		</div>
		);
}

const styles = {
	container:{
		backgroundColor: '#dfe3e6',
		borderRadius: 3,
		height: "100%",
		width: 300,
		padding: 8,
		marginRight: 8
	}
}

export default TrelloList;