import { Text, View, Pressable } from "react-native";
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

/* function Roll({setter}) {
	if (rolls.length == 0) createRolls();
	var roll: number = rolls.pop();
	setter(roll);	
}
 */


// Display components
function Die({value}) {
	return ( <Text>{value}</Text>);
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
    <Pressable onPress={rollButtonClickHandler}>
     <Text>Click to roll</Text>
    </Pressable>
  );
}
 
 function DiceDisplay({roll}) {

	//console.log(roll);
	if (roll == -1) {
		return (<> </>);
	}
	else {
		var die1:number = (roll % 6) + 1;
		var die2:number = ((roll - (roll % 6)) / 6) + 1;	
		
		
		return (
			<>
			<Die value={die1} />
			<Die value={die2} />
			<Total value={die1+die2} />
			</>
		);
	}
 
 }

export default function Index() {
	
	const [roll, setroll] = useState(-1);
	
	//console.log(rolls);
	

  return (
 <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
   <DiceDisplay roll={roll}/>
   <RollButton setter={setroll} /> 

	</View>
  );
  

}
