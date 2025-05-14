import { Text, View, Button, StyleSheet } from "react-native";
import { useState } from 'react';

var rolls = new Array(0); //todo should probably make this state (or context?) as well, not just an ordinary global



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


// Display components
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

function RollButton({setter}) {
	function rollButtonClickHandler() {
		
		if (rolls.length == 0) createRolls();
		var roll: number = rolls.pop();
		setter(roll);	
	}

  return (
		<Button  title="Click to roll" onPress={rollButtonClickHandler} style={styles.button} />
  );
}
 
 function DiceDisplay({roll}) {

	//console.log(roll);
	if (roll == -1) {
		return (<Text> </Text>);
	}
	else {
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

export default function Index() {
	
	const [roll, setroll] = useState(-1);
	
	//console.log(rolls);
	

  return (
		<View style={styles.mainView}>
			<DiceDisplay roll={roll}/>
			<RollButton setter={setroll} /> 
		</View>
  );
  

}
const styles = StyleSheet.create({
	/* button: {
		borderRadius: 30,
		color: "ddffdd",
	}, */ //button doesn't support styling; could use Pressable instead, or just Text or View?
	
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