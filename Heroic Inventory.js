function solve(input) {
    let heroes = [];
    input.forEach(element => {
        //console.log(element);
        let [name, level, items] = element.split(' / ');
        level = Number(level);
        items = items !==undefined ? items.split(', '):[];
        //items = items.split(', ');
        let hero = { name, level, items };
        //console.log(hero);
        heroes.push(hero);
    });

    console.log(JSON.stringify(heroes));
}

solve(
    ['Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara']

)