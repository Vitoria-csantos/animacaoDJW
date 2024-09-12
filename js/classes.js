class obj{
    quadro = 0
    tempo= 0


    constructor(px,py, largura, altura, img){
        this.px = px
        this.py = py
        this.largura = largura
        this.altura = altura
        this.img = img
    }
}

draw(){
    let imagem = new Image()
    imagem.src = this.imagem
    canvas.drawImages(img, this.px, this.py, this.largura, this.altura)
}

animacao(velocidade, limite, nomeImg){
    this.tempo += 1
   if(this.tempo >= velocidade){
        this.tempo = 0
        this.quadro = 0
   }
   if(this.quadro >= limite){
    this.quadro = 0

   }

   this.imagem = 'img/' + nomeImg + this.quadro + '.png'
}

class BG extends obj{
    move(velocidade,limite,pos){
        this.px -= velocidade

        if(this.px < -limite){
            this.px = pos
        }
    }
}

