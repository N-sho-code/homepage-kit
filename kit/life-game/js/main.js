const size = 3;
const width = 100;
const height =100;
let field = [];
let nextFild = [];
const clear = () =>{
    for(let y = 0;y < height + 2;y++){
        field[y] = [];
        nextFild[y] = [];
        for(let x = 0;x < width + 2;x++){
            field[y][x] = 0;
            nextFild[y][x] = 0;    
        }
    }
};
function random() {
    for (let y = 1; y < height + 1; y++) {
        for (let x = 1; x < width + 1; x++) {
            field[y][x] = Math.random() < 0.3 ? 1 : 0;
        }
    }
};
const render = () =>{
    for(let y = 1;y < height + 1;y++){
        for(let x = 1;x < width + 1;x++){
            ctx.fillStyle=field[y][x]?'#0f0':'#000';
            ctx.fillRect((x-1)*size,(y-1)*size,size,size);

        }
    }
};

let ctx = null;
const init = () => {
    const canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = size * width;
    canvas.height = size * height;

    clear();
    random();
    render();
};

window.onload = () =>{
    init();
};
