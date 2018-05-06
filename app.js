 const gameField  = [];
const pawns = []


window.onload =function () {


    for (let i = 0; i < 8; i++) {

        gameField[i] = []

        for (let j = 0; j < 8; j++) {
            gameField[i][j] = document.createElement('div');
            document.body.appendChild(gameField[i][j]);
            gameField[i][j].setAttribute('id', "[" + i + "," + j + "]");//Pomocniczo żeby widzieć indeksy--

            if (i % 2 == 0 && j % 2 == 0) {
                gameField[i][j].classList.add('black')
            }
            else if (i % 2 !== 0 && j % 2 !== 0) {
                gameField[i][j].classList.add('black')
            }


        }

    }
    // for(let i = 0; i<24; i++){ -------------------------> generuje pionki
    //     pawns[i]= document.createElement('div');
    //     document.body.appendChild(pawns[i]);
    //     pawns[i].classList.add('pawns')
    // }

    console.log(gameField)
    var pawnTest = document.getElementsByClassName('pawns')
    console.log(pawnTest)
    pawnTest.mouseDown =  function (e) {





            this.style.left = e.clientX + 'px'
            this.style.top = e.clientY + 'px'
            console.log(this.style.left)
        }


}
