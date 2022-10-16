const namePokemon = document.querySelector('.pokemonName');
const numberPokemon = document.querySelector('.pokemonNumber')
const imagePokemon= document.querySelector('.pokemonImage')
const form = document.querySelector('.form')
const input= document.querySelector('.inputSearch')

let searchPokemon = 1;

const fetchPokemon = async (pokemon)=>{
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(APIResponse.status===200){
        const data = await APIResponse.json();
    return(data)
    }
    
}

const renderPokemon = async(pokemon)=>{
    imagePokemon.src='./assets/loading-icon.gif';
    const data = await fetchPokemon(pokemon);
    namePokemon.innerHTML= data.name;
    numberPokemon.innerHTML=data.id + "-";
    imagePokemon.src=data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value=""
    searchPokemon =data.id
    
    }

form.addEventListener('submit',(event) =>{
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
    ;
})


document.querySelector('.buttonNext').addEventListener('click',(event) =>{
   searchPokemon += 1;
   renderPokemon(searchPokemon)

})

document.querySelector('.buttonPrev').addEventListener('click',(event) =>{
    searchPokemon -= 1;
   renderPokemon(searchPokemon)
 
 })

renderPokemon(searchPokemon)
