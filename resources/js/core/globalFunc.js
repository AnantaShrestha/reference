// get short name
export function shortName(data){
	let nameArr=data.split(' ');
	let firstLetter='';
	let secondLetter='';
	if(nameArr[0]){
		firstLetter=nameArr.shift().charAt(0)
	}
	if(nameArr[1]){
		secondLetter= nameArr.pop().charAt(0)
	}
	let shortName=firstLetter + secondLetter
	return shortName.toUpperCase()
	
}

//get current user
