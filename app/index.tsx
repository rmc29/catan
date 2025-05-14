/*
This is a simple dice-rolling app to enforce expected probabilities when rolling two six-sided dice for board games like (Settlers of) Catan and its sequels.
Rather than rolling each D6 independently (which can cause an overabundance of 2s or 12s, or a shortage of 6s or 8s), it produces all 36 possible pairs once each in a random order (and then starts again if needed).
*/

import { Text, View, Button, Pressable, StyleSheet } from "react-native";
import { useState } from 'react';

var rolls = new Array(0); //TODO maybe make this state (or context?) as well, rather than just an ordinary global


/*Populate an array with the 36 possible combinations, and shuffle them*/
function createRolls() {
	var i: number;
	var tmp: number;
	var swappos: number;

	for (i=0; i<=36; i++) {
		rolls[i] = i; 
	}

	//shuffle
	for (i=0; i<=36; i++){
			tmp = rolls[i];
			swappos=Math.floor(Math.random()*36);
			rolls[i]=rolls[swappos];
			rolls[swappos]=tmp;
	}
}


/* The display components for each die, the sum of their two values, the container for all those, and the roll button
(TODO These should probably be in their own files) */
function Die({value}) {
	return ( 
		<View style={styles.dieview}>
			<Text style={styles.dietext}>
				{value}
			</Text>
		</View>
	);
}

function Total({value}) {
	return ( <Text>Total: {value}</Text>);
}

 function DiceDisplay({roll}) {
	if (roll == -1) {
		return (<Text> </Text>); //if the array of 36 rolls hasn't been created yet, return an empty text container
	}
	else { //extract the two individual die values from the number between 0 and 35
		var die1:number = (roll % 6) + 1;
		var die2:number = ((roll - (roll % 6)) / 6) + 1;			
		
		return (
		<>
			<View style={styles.dicecontainer}>
				<Die value={die1} />
				<Die value={die2} />
			</View>
			<Total value={die1+die2} />
			</>
		);
	} 
 }


function RollButton({setter}) {
	function rollButtonClickHandler() {
		
		if (rolls.length == 0) createRolls(); //if the array of rolls is empty (either because we just started or because they've been used up) create it
		var roll: number = rolls.pop(); //pop one of the shuffled numbers 0-35 off the array
		setter(roll);	
	}

  return (
		<Pressable onPress={rollButtonClickHandler}>
			<View style={styles.button} >
				<Text>Click to roll</Text>
			</View>
		</Pressable>
  );
}
 


export default function Catan() {
	
	const [roll, setroll] = useState(-1); //to store state for current roll: initialise to -1
	
  return (
		<View style={styles.mainView}>
		<Text>Fair dice app for Catan games</Text>
			<DiceDisplay roll={roll}/>
			<RollButton setter={setroll} /> 
		</View>
  );
  

}
const styles = StyleSheet.create({
	button: {
		borderRadius: 30,

		 borderWidth: 1,
		backgroundColor: "lightgray",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
	boxShadow: "darkgrey 2px 2px",
	marginTop: 20,
	}, 
	
	dietext: {
		fontSize: 40,
		fontWeight: "bold",	
		textAlign: "center",
	},
	
	dieview: {

		 backgroundColor: "lightgray",
		  borderWidth: 2,
		  borderColor: "black",
		  float: "left",
		  borderRadius: 10,
		  width: 60,
		  margin: 10,
		  justifyContent: 'center', 
       alignItems: 'center', 
	
	},
	
	dicecontainer: {
		margin: 20,
		flexDirection:"row",
		justifyContent: "space-around",
	},
		

	mainView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
	  }
});