animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

function getInfo(arr, tableName){
    caption = `<caption> ${tableName} info</caption>`;
    tr = ``;
    for(i = 0; i < arr.length; i++){
        tr += `
            <tr>
                <td>${arr[i][0]}</td>
                <td>${arr[i][1]}</td>
                <td>${arr[i][2]}</td>
            </tr>
        `;
    }
    return `
        <table>
            ${caption}
            <tbody>
                ${tr}
            </tbody>
        </table>
    `;
}

getInfo(animals, `Animals`);
// getInfo(food, `Food`);

document.write(getInfo(animals, `Animals`));
document.write(getInfo(food, `Food`));