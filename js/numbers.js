let blockNumbers = document.querySelector(".block-numbers");

export let arrNumbers = [1,2,3,4,5,6,7,8,9,0];

for (let num of arrNumbers){
 
	let div = document.createElement('div');
	div.dataset.show = "number";
	div.classList.add("common");
	div.innerHTML = num;
	blockNumbers.append(div); 

}
