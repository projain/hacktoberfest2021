let movieList; 
let favouriteList;

function getMovies() {
return fetch('http://localhost:3000/movies')
.then(res=>res.json())
.then(
	data=>{
	data.forEach(movie=>{
		let list=document.getElementById('moviesList');
		let li=document.createElement('li');
		li.innerHTML+=`<br>`;
		li.innerHTML=movie.title;
		li.innerHTML+=`<br>`;
		let poster=document.createElement('img');
		poster.setAttribute('width','200px');
		poster.setAttribute('class','img-fluid');
		poster.src=movie.posterPath;
		poster.alt=movie.title;
		let btn=document.createElement('button');
		btn.innerHTML="Add to Favourites";
		btn.setAttribute( 'onclick',"addFavourite(" + movie.id + ");");
		btn.setAttribute( 'class',"btn btn-warning");
		li.appendChild(poster);
		li.appendChild(btn);
		list.appendChild(li);
	})
	movieList = data;
	return data;}
	)
}

function getFavourites() {
	return fetch("http://localhost:3000/favourites")
	.then(res=>res.json())
	.then(
		data=>{
		data.forEach(movie=>{
			let list=document.getElementById('favouritesList');
			let li=document.createElement('li');
			li.innerHTML=movie.title;
			li.innerHTML+=`<br>`;
			let poster=document.createElement('img');
			poster.src=movie.posterPath;
			poster.alt=movie.title;
			poster.setAttribute('width','200px');
			poster.setAttribute('class','img-fluid');
			li.appendChild(poster);
			list.appendChild(li);
		})
		favouriteList = data;
		return data;}
		)
}

function addFavourite(id) {
	//console.log('hi');
	var fav=movieList.filter(movie=>movie.id==id);
	var isfav=favouriteList.filter(movie=>movie.id==id);
	if (isfav.length!=0)
	{
		//console.log('isfav');
		return Promise.reject(new Error('Movie is already added to favourites'));

	}
	//console.log(isfav);
	return fetch('http://localhost:3000/favourites',{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(fav[0])
	}).then(res=>{
		// if movie was added to favourites already, throw error message
		if (res.ok) {
			// parse to json and return it
			return res.json();
		}
		else
		//throw Error('Movie is already added to favourites');
		return Promise.reject(new Error('Movie is already added to favourites'));

	})
	.then(data=>{
		//console.log(data);
		//document.getElementById('favouritesList').innerHTML=''
		let list=document.getElementById('favouritesList');
			let li=document.createElement('li');
			li.innerHTML=data.title;
			li.innerHTML+=`<br>`;
			let poster=document.createElement('img');
			poster.src=data.posterPath;
			poster.alt=data.title;
			poster.setAttribute('width','200px');
			poster.setAttribute('class','img-fluid');
			li.appendChild(poster);
			list.appendChild(li);
		favouriteList.push(data);
        return favouriteList;
})
		.catch(err=>{
			alert(err.message);
		})
//console.log(data);

}

module.exports = {
	getMovies,
	getFavourites,
	addFavourite
};

// You will get error - Uncaught ReferenceError: module is not defined
// while running this script on browser which you shall ignore
// as this is required for testing purposes and shall not hinder
// it's normal execution



