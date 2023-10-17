const height = 5;

for (let i=0; i<=height; i++) {

    let hashes="";
    let spaces="";

    for (let j=0;j<i; j++) {
        hashes+="#";
    }

    for (let k=0; k<height-i; k++) {
        spaces+=" ";
    }

    console.log(spaces+hashes+" "+hashes)
}