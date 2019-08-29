const teamJohnAvg = (300 + 300 + 300) / 3;
const teamMarkAvg = (300 + 300 + 300) / 3;
const teamMaryAvg = (300 + 300 + 300) / 3;

if(teamJohnAvg > teamMarkAvg && teamJohnAvg > teamMaryAvg) {
    console.log("John's team has the highest average score:", teamJohnAvg);
} else if(teamMarkAvg > teamJohnAvg && teamMarkAvg > teamMaryAvg) {
    console.log("Mark's team has the highest average score:", teamMarkAvg);
} else if(teamMaryAvg > teamJohnAvg && teamMaryAvg > teamMarkAvg) {
    console.log("Mary's team has the highest average score:", teamMaryAvg);
} else {
    console.log("A rare three way tie!", teamJohnAvg, teamMarkAvg, teamMaryAvg);
}