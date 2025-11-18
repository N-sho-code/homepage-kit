const size = 3;
const width = 100;
const heigth =100;
const clear = () >={
    
}

let ctx = null;
const init = () => {
    const canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = size * width;
    canvas.heigth = size * width;

    clear();
    random();
    render();

}
