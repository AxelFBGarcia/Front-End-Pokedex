const fetchPokemon = () => {
    const stwhite = document.querySelectorAll(".stsh");
    console.log(stwhite)
    for (let i = 0; i < stwhite.length; i++) {
        stwhite[i].style.backgroundColor = "white";
      }
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
    let hp = Math.round(basestats[0]/10);
    let atk = Math.round(basestats[1]/10);
    let def = Math.round(basestats[2]/10);
    let spatk = Math.round(basestats[3]/10);
    let spdef = Math.round(basestats[4]/10);
    let speed = Math.round(basestats[5]/10);
    console.log(basestats);

    for (let i=0;i<hp;i++){
        var stcol = String(i+1 + "a")
        document.getElementById(stcol).style.backgroundColor ="rgb(0, 225, 255)";
    }
    for (let i=0;i<atk;i++){
        var stcol = String(i+1 + "b")
        document.getElementById(stcol).style.backgroundColor ="rgb(0, 225, 255)";
    }
    for (let i=0;i<def;i++){
        var stcol = String(i+1 + "c")
        document.getElementById(stcol).style.backgroundColor ="rgb(0, 225, 255)";
    }
    for (let i=0;i<spatk;i++){
        var stcol = String(i+1 + "d")
        document.getElementById(stcol).style.backgroundColor ="rgb(0, 225, 255)";
    }
    for (let i=0;i<spdef;i++){
        var stcol = String(i+1 + "e")
        document.getElementById(stcol).style.backgroundColor ="rgb(0, 225, 255)";
    }
    for (let i=0;i<speed;i++){
        var stcol = String(i+1 + "f")
        document.getElementById(stcol).style.backgroundColor ="rgb(0, 225, 255)";
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