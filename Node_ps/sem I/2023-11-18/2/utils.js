function uniq(tab) {
    let result=[];

    for (const item of tab) {
        if (result.indexOf(item)===-1) {
            result.push(item);
        }
    }

    return result;
}

function diff(tab1, tab2) {
    let result =[];

    tab1.forEach(function(element){
        if (tab2.indexOf(element)===-1){
            result.push(element);
        }
    })

    return result;
}

module.exports ={
    uniq: uniq,
    diff: diff
}