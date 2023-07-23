const btnEl=document.getElementById("btn");
const animeContainerEl=document.querySelector(".anime-container");
const animeImgEl=document.querySelector(".anime-img");
const animeNameEl=document.querySelector(".anime-name");
btnEl.addEventListener("click",async function(){
   try {
    btnEl.disabled=true;
    btnEl.innerText="Loading.....";
    animeImgEl.src="spinner1.svg";
    animeNameEl.innerText="Updating...";
    const response=await fetch("https://api.catboys.com/img");
    const data=await response.json();
    console.log(data);
    btnEl.disabled=false;
    btnEl.innerText="Get Anime";
    animeContainerEl.style.display="block";
    animeImgEl.src=data.url;
    animeNameEl.innerHTML=data.artist;
   } catch (error) {
    console.log(error);
    btnEl.disabled=false;
    btnEl.innerHTML="Get Anime";
    animeNameEl.innerText="Error has occured";
   }
})