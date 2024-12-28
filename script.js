function firstWord(s) {
	let str = ''
	for(let i=0;i<s.length;i++){
		if((s[i]>='a'&&s[i]<='z')|| (s[i]>='A'&&s[i]<='Z')){
			str +=s[i]	
		}
		else if(str.length>0){
			break;
		}
	}
	return str;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
