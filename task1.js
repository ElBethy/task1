for(i=0; i<=15; i++){
    // this sction checks for even number
    if(i%2 == 0){
        const newH1 = document.createElement("h1");
        newH1.innerHTML = `${i} is even`;
        document.body.appendChild(newH1)
    }
    // this sction checks for odd number
    if(i%2 != 0){
        const newH1 = document.createElement("h1");
        newH1.innerHTML = `${i} is odd`;
        document.body.appendChild(newH1)
    }
}