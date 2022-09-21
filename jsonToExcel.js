const XLSX = require('xlsx');
const path = require('path');

let sheetPath = './players.xlsx';
let sheetName = "players";
let columns = [
    "name",
    "team"
];

let players = [
    {
        name: "Paul pogba",
        team: "Juventus"
    },
    {
        name: "Thiago Alacntara",
        team: "Liverpool"
    },
    {
        name: "Aurelien Tchouameni",
        team: "Madrid"
    }
];

let exportToExcel = (sheetPath, sheetName, columns, players) => {
    let data = players.map(player => [player.name, player.team]); // transforming an array of json to an array of arrays
    let workBook = XLSX.utils.book_new(); // creates new work book
    let workSheetData = [
        columns,
        ...data
    ];
    let workSheet = XLSX.utils.aoa_to_sheet(workSheetData);
    XLSX.utils.book_append_sheet(workBook, workSheet, sheetName);
    XLSX.writeFile(workBook, path.resolve(sheetPath));
}

exportToExcel(sheetPath, sheetName, columns, players);

