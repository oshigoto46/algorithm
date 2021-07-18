var count = 0;
["january", "february","march","april","may","june","july","august","september","october","november","december"].map(a => { (a.indexOf("r") > -1) ? count += 1 : count })
console.log(count)