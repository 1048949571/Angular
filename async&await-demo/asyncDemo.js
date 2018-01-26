async function a(){

	const one = await new Promise(function(resolve,reject){

	setTimeout(function(){

	console.log('one done')
		resolve()
	},1000)

	}) 

	const two = await new Promise(function(resolve,reject){
		
	setTimeout(function(){

	console.log('two done')	
		resolve()
	},2000)


	}) 

}



a().then(function(){

	
	console.log('all done')
		

})