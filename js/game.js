const canvas = document.getElementById ('canvas').getContext('2d')
let fundo = new BG (0, 0, 500, 900, 'img/ceu.jpg')
let fundo2 = new BG (500, 0, 500, 900, 'img/ceu.jpg')

let passaro = new PASSARO ('img/pasroxo.png')


function draw(){
    fundo.draw()
    fundo2.draw()

    passaro.draw()
}

function update(){
    fundo.move(2,500,0)
    fundo2.move(2,0,500)

    passaro.move()
    passaro.animacao(8,4,'passaro')
    passaro.limite()
}

function main (){
    canvas.clearRect(0,0,500,900)
    update()
    draw()
    requestAnimationFrame(main)
}

main()