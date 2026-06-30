let btn1 = document.querySelector("#btn1");

btn1.onclick = (e) => {
    console.log("btn1 was clicked");
    let a = 0;
    a++;
    console.log(a);
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
};

btn1.addEventListener("dblclick", () => {
    console.log("btn1 was clicked! - 1");
});

btn1.addEventListener("dblclick", () => {
    console.log("btn1 was clicked! - 2");
});

const handler3 =  () => {
    console.log("btn1 was clicked! - 3");
};

btn1.addEventListener("dblclick", handler3);

btn1.addEventListener("dblclick", () => {
    console.log("btn1 was clicked! - 4");
});

btn1.removeEventListener("dblclick", handler3) ;


let box = document.querySelector("div");

box.onmouseover = (e) => {
    console.log("You are inside div!");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);

};

let mode = document.querySelector("#mode");
let Currmode = "light";
let body = document.querySelector("body");

mode.addEventListener("click", () => {
    if(Currmode === "light") {
        Currmode = "dark"
        body.classList.add("dark");
         body.classList.remove("light");

    }else {
        Currmode ="light"
         body.classList.add("light");
         body.classList.remove("dark");

    }
        
    console.log(Currmode);
});