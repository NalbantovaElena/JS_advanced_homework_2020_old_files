function solve(input) {
    let htmlTable = '';
    htmlTable += '<table>\n'
    input.forEach(element => {
        let employees = JSON.parse(element);
        htmlTable += `<tr>\n`
        Object.values(employees).forEach(line => {
            //console.log(line);
            htmlTable += `<td>${line}</td>\n`

        })

        htmlTable += `</tr>\n`

    })
    htmlTable += '</table>\n'
    console.log(htmlTable);
}

solve(
    ['{"name":"Pesho","position":"Promenliva","salary":100000}',
        '{"name":"Teo","position":"Lecturer","salary":1000}',
        '{"name":"Georgi","position":"Lecturer","salary":1000}']

)