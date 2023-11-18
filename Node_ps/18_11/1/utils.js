function uniq(tab) {
    let result=[];

    for (const item of tab) {
        if (result.indexOf(item)===-1) {
            result.push(item);
        }
    }

    return result;
}

module.exports ={
    uniq: uniq
}