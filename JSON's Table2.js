function solve(input) {
    let htmlTable = '';
     htmlTable += '<table>\n'
    input.forEach(element => {
        let employees = JSON.parse(element);
        //console.log(employees);
       
       htmlTable+=`<tr>\n`
      htmlTable+=`<td>${employees.name}</td>\n`
		htmlTable+=`<td>${employees.position}</td>\n`
		htmlTable+=`<td>${employees.salary}</td>\n`
     htmlTable+=`</tr>\n`
    

    })
    htmlTable += '</table>\n'
    console.log(htmlTable);
}

solve(
    ['{"name":"Pesho","position":"Promenliva","salary":100000}',
        '{"name":"Teo","position":"Lecturer","salary":1000}',
        '{"name":"Georgi","position":"Lecturer","salary":1000}']

)