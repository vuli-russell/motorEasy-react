const showToast = message => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let root = document.getElementById("root");

    div.style.width = "100%";
    div.style.position = "fixed";
    div.style.bottom = "30%";
    p.style.margin = "auto";
    p.style.padding = "10px";
    p.style.color = "white";
    p.style.backgroundColor = "black";
    p.style.borderRadius = "10px";   
    p.style.width = "fit-content";
    
    p.innerText = message;
    div.append(p);
    root.append(div);
    setTimeout(()=>{div.remove()},2000);
}

export default showToast;