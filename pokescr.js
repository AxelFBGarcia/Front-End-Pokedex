const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
            pokeImage("./img/sad.gif");
        }
        else{
            return res.json();
        }
        return res.json();
    }).then((data) => {
        let id = data.types[0].type.name;
        let pokeImg = data.sprites.front_default;
        let weight = data.weight/10;
        let height = data.height/10;
        let type = data.types[0].type.name;
        let name = data.name;
        let number = data.id;
        pokeImage(pokeImg)
        document.getElementById("pokename").innerHTML = String("0" + String(number + " ") + name);
        document.getElementById("height").innerHTML = String(height + " M");
        document.getElementById("weight").innerHTML = String(weight + " Kg");
        document.getElementById("type").innerHTML = type;
        document.getElementById("weight").innerHTML = String(weight + " Kg");
        stats(id)
        stats2(data)
    })
}

const stats2 = (data) => {
    let stats = data.stats;
    let basestats = [];
    for (let i=0;i<stats.length;i++){
        basestats.push(stats[i].base_stat);
    }
    let hp = basestats[0];
    let atk = basestats[1];
    let def = basestats[2];
    let spatk = basestats[3];
    let spdef = basestats[4];
    let speed = basestats[5];
    console.log(hp);

    switch (hp/10){
        case'1':
        case'2':
        case'3':
        case'4':
        case'5':
        case'6':
        case'7':
        case'8':
        case'9':
        case'10':
    }
}
    

const stats = (id) => {
    const url2 = `https://pokeapi.co/api/v2/type/${id}`;
    fetch(url2).then((res) => {
        return res.json();
    }).then((data) =>{
        if(data.damage_relations.double_damage_from.length < 2){
            let weakness = data.damage_relations.double_damage_from[0].name;
            let weakness2 = data.damage_relations.half_damage_from[0].name;
            document.getElementById("weakness").innerHTML = weakness;
            document.getElementById("weakness2").innerHTML = weakness2;
        }
        else{
            let weakness = data.damage_relations.double_damage_from[0].name;
            let weakness2 = data.damage_relations.double_damage_from[1].name;
            document.getElementById("weakness").innerHTML = weakness;
            document.getElementById("weakness2").innerHTML = weakness2;
        }

    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

