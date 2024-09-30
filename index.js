// code your solution here
function superbowlWin(records) {
    const winningRecord = records.find(function(record) {
        return record.result === "W";
    });
    return winningRecord ? winningRecord.year : undefined;
}

const games = [
    { year: 1997, result: "W", team: "Denver Broncos" },
    { year: 1998, result: "W", team: "Denver Broncos" }, 
    { year: 2005, result: "L", team: "Denver Broncos" }, 
    { year: 2015, result: "W", team: "New England Patriots" }, 
];

console.log(superbowlWin(games));