function kate(e) {
    console.log('Let me gooooooooooooo!!!', this)
}
// 1. show binding of function 
const boundKate = kate.bind({name: 'Kate'})
// 2. show using the bound function
// document.getElementsByClassName('photo')[2].addEventListener('drag', boundKate)


// 3. show event propagation!!!
document.getElementById('photos').addEventListener('click', function (e) {
	console.log('e ', e);
	console.log('this ', this);
})