window.onload= function () {
    var gameFields=[];

    for(var i = 0; i<64; i++) {
        var oneDiv = document.createElement('div')
        document.body.appendChild(oneDiv);
        oneDiv.setAttribute('id', '1' + i);


    };
    var onePiece = document.querySelectorAll('div')


    // console.log(document.querySelectorAll('div'))
    for(i = 0; i<onePiece.length; i++){
        //console.log(onePiece[i])
        if (i<7 && i%2 ==0){
            onePiece[i].classList.add('black')
        }
        else if (i%2 !==0 && i>7&& i<=15){
            onePiece[i].classList.add('black')
        }
        else if (i%2 ==0 && i>15&& i<=23){
            onePiece[i].classList.add('black')
        }
        else if (i%2 !==0 && i>23&& i<=31){
            onePiece[i].classList.add('black')
        }
        else if (i%2 ==0 && i>31&& i<=39){
            onePiece[i].classList.add('black')
        }
        else if (i%2 !==0 && i>39&& i<=47){
            onePiece[i].classList.add('black')
        }
        else if (i%2 ==0 && i>47&& i<=55){
            onePiece[i].classList.add('black')
        }
        else if (i%2 !==0 && i>55&& i<=63){
            onePiece[i].classList.add('black')
        }
    }

    var elements = document.getElementsByClassName('black')
    gameFields.push(elements)
    console.log(elements)

    elements.addEventListener('click', function (e) {
        // console.log(e)
        e.path[0].classList.add('choose')
    });

//PIONKI
    for(var i = 0; i<24; i++) {
        var pawn = document.createElement('div')
        document.body.appendChild(pawn);
        pawn.classList.add('pawns')
    }
};
