function firstfunction() { 
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    let first = document.getElementById("first");
    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');
    first.setAttribute("class","text-center text-primary");  
}