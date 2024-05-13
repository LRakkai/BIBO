












document.querySelector('.back-materi').addEventListener('click', function(){
    const back = document.querySelectorAll('.home');
    back.forEach(element => {
        element.style.display = 'block'
        setTimeout(() => {
            element.style.opacity = '1';
        }, 40); // Waktu 1 detik
    })

    const back2 = document.querySelectorAll('.materi');
    back2.forEach(element => {
        element.style.display = 'none'
        setTimeout(() => {
            element.style.opacity = '0';
        }, 40); // Waktu 1 detik
    })

})


document.querySelector('.back-soal').addEventListener('click', function() {
    const back1 = document.querySelectorAll('.home');
    back1.forEach(element => {
        element.style.display = 'block'
        setTimeout(() => {
            element.style.opacity = '1';
        }, 40); // Waktu 1 detik
    })

    const back2 = document.querySelectorAll('.soal');
    back2.forEach( element => {
        element.style.display = 'none';
        setTimeout(() => {
            element.style.opacity = '0';
        }, 40); // Waktu 1 detik
    })
})


document.querySelector('.back-game').addEventListener('click', function() {
    const back1 = document.querySelectorAll('.home');
    back1.forEach(element => {
        element.style.display = 'block'
        setTimeout(() => {
            element.style.opacity = '1';
        }, 40); // Waktu 1 detik
    })

    const back2 = document.querySelectorAll('.game');
    back2.forEach(element => {
        element.style.display = 'none'
        setTimeout(() => {
            element.style.opacity = '0';
        }, 40); // Waktu 1 detik
    })
})

document.querySelector('.back-game-2').addEventListener('click', function() {
    const back1 = document.querySelectorAll('.game-section-1');
    const back2 = document.querySelectorAll('.game');

    back2.forEach(element => {
        element.style.display = 'block'
        setTimeout(() => {
            element.style.opacity = '1';
        }, 40); // Waktu 1 detik
    })

    back1.forEach(element => {
        element.style.display = 'none'
        setTimeout(() => {
            element.style.opacity = '0';
        }, 40); // Waktu 1 detik
    })
})

document.querySelector('.back-game-2-mobile').addEventListener('click', () => {
    const button1 = document.querySelectorAll('.game-section-1')
    const button2 = document.querySelectorAll('.game')
    const button3 = document.querySelectorAll('.navigation')

    button1.forEach(element => {
        element.style.display = 'none'
        setTimeout(() => {
            element.style.opacity = '0'
        },1)
    })

    button2.forEach(element => {
        element.style.display = 'block'
        setTimeout(() => {
            element.style.opacity = '1'
        },1)
    })

    button3.forEach(element => {
        element.style.display = 'flex'
        setTimeout(() => {
            element.style.opacity = '1'
        },1)
    })
})


document.querySelector('.back-game-3').addEventListener('click', function() {
    const back1 = document.querySelectorAll('.game-section-2');
    const back2 = document.querySelectorAll('.game');

    back2.forEach(element => {
        element.style.display = 'block'
        setTimeout(() => {
            element.style.opacity = '1';
        }, 40); // Waktu 1 detik
    })

    back1.forEach(element => {
        element.style.display = 'none'
        setTimeout(() => {
            element.style.opacity = '0';
        }, 40); // Waktu 1 detik
    })
})

document.querySelector('.back-game-3-mobile').addEventListener('click', () => {
    const button1 = document.querySelectorAll('.game-section-2')
    const button2 = document.querySelectorAll('.game')
    const button3 = document.querySelectorAll('.navigation')

    button1.forEach(element => {
        element.style.display = 'none'
        setTimeout(() => {
            element.style.opacity = '0'
        },1)
    })

    button2.forEach(element => {
        element.style.display = 'block'
        setTimeout(() => {
            element.style.opacity = '1'
        },1)
    })

    button3.forEach(element => {
        element.style.display = 'flex'
        setTimeout(() => {
            element.style.opacity = '1'
        },1)
    })
})


document.querySelector('.team-1').addEventListener('click', function() {
    const team1 = document.querySelectorAll('.setting');
    const team2 = document.querySelectorAll('.team-1');
    const team3 = document.querySelectorAll('.team-2');

    team1.forEach( element => {
        element.style.display = 'block'
        setTimeout(() => {
            element.style.opacity = '1';
        }, 40); // Waktu 1 detik
    })
    team2.forEach( element => {
        element.style.display = 'none'
    })
    team3.forEach( element => {
        element.style.display = 'block'
    })
})


document.querySelector('.team-2').addEventListener('click', function() {
    const team1 = document.querySelectorAll('.setting');
    const team2 = document.querySelectorAll('.team-1');
    const team3 = document.querySelectorAll('.team-2');

    team1.forEach( element => {
        element.style.display = 'none'
        setTimeout(() => {
            element.style.opacity = '0';
        }, 40); // Waktu 1 detik
    })
    team2.forEach( element => {
        element.style.display = 'block'
    })
    team3.forEach( element => {
        element.style.display = 'none'
    })
})




document.querySelector('.home-materi').addEventListener('click', function() {
    const materi1 = document.querySelectorAll('.materi');
    materi1.forEach(element => {
        element.style.display = 'block';
        setTimeout(() => {
            element.style.opacity = '1';
        }, 40); // Waktu 1 detik
    });

    const materi2 = document.querySelectorAll('.home');
    materi2.forEach(element => {
        element.style.display = 'none';
        setTimeout(() => {
            element.style.opacity = '0';
        }, 40); // Waktu 1 detik
    });
});


document.querySelector('.home-soal').addEventListener('click', function(){
    const soal1 = document.querySelectorAll('.soal');
    soal1.forEach(element => {
        element.style.display = 'block';
        setTimeout(() => {
            element.style.opacity = '1';
        }, 40); // Waktu 1 detik
    })

    const soal2 = document.querySelectorAll('.home')
    soal2.forEach(element => {
        element.style.display = 'none';
        setTimeout(() => {
            element.style.opacity = '0';
        }, 40); // Waktu 1 detik
    })
})


document.querySelector('.home-game').addEventListener('click', function() {
    const game1 = document.querySelectorAll('.game');
    const game2 = document.querySelectorAll('.home');

    game1.forEach(element => {
        element.style.display = 'block';
        setTimeout(() => {
            element.style.opacity = '1';
        }, 40); // Waktu 1 detik
    })

    game2.forEach(element => {
        element.style.display = 'none';
        setTimeout(() => {
            element.style.opacity = '0';
        }, 40); // Waktu 1 detik
    })
})


document.querySelector('.game-image-image-game1').addEventListener('click', function() {
    const game1 = document.querySelectorAll('.game,.navigation');
    const game2 = document.querySelectorAll('.game-section-1');

    game1.forEach(element => {
        element.style.display = 'none'
        setTimeout(() => {
            element.style.opacity = '0';
        }, 40); // Waktu 1 detik
    })
    game2.forEach(element => {
        element.style.display = 'block'
        setTimeout(() => {
            element.style.opacity = '1';
        }, 40); // Waktu 1 detik
    })
} )


document.querySelector('.game-image-image-game2').addEventListener('click', function() {
    const game1 = document.querySelectorAll('.game,.navigation ');
    const game2 = document.querySelectorAll('.game-section-2');

    game1.forEach( element => {
        element.style.display = 'none'
        setTimeout(() => {
            element.style.opacity = '0';
        }, 40); // Waktu 1 detik
    })

    game2.forEach( element => {
        element.style.display = 'block'
        setTimeout(() => {
            element.style.opacity = '1';
        }, 40); // Waktu 1 detik
    })
})









const tema1 = document.getElementById('tema-1');
const tema2 = document.getElementById('tema-2');
const tema3 = document.getElementById('tema-3');
const original = document.getElementById('default');
const defaultMobile = document.getElementById('default-mobile')

tema1.addEventListener('click', () => {
    original.classList.remove('tema-2','tema-3');
    original.classList.add('tema-1');
    tema2.classList.remove('setting-tema-background-tema-2');
    tema3.classList.remove('setting-tema-background-tema-3');
    tema1.classList.add('setting-tema-background-tema-1');
    defaultMobile.classList.remove('tema-2', 'tema-3');
    defaultMobile.classList.add('tema-1');
});

tema2.addEventListener('click', () => {
    original.classList.remove('tema-1','tema-3');
    original.classList.add('tema-2');
    tema2.classList.add('setting-tema-background-tema-2');
    tema3.classList.remove('setting-tema-background-tema-3');
    tema1.classList.remove('setting-tema-background-tema-1');
    defaultMobile.classList.remove('tema-1', 'tema-3');
    defaultMobile.classList.add('tema-2');
});

tema3.addEventListener('click', () => {
    original.classList.remove('tema-1','tema-2');
    original.classList.add('tema-3');
    tema2.classList.remove('setting-tema-background-tema-2');
    tema3.classList.add('setting-tema-background-tema-3');
    tema1.classList.remove('setting-tema-background-tema-1');
    defaultMobile.classList.remove('tema-2', 'tema-1');
    defaultMobile.classList.add('tema-3');
});





let audio1 = document.querySelector('.audio-1')
let audio2 = document.querySelector('.audio-2')
let audio3 = document.querySelector('.audio-3')
let audioOn = document.querySelector('.audio-on')
let audioOff = document.querySelector('.audio-off')
let audioOnColor = document.querySelector('.setting-music-on')
let audioOffColor = document.querySelector('.setting-music-off')


document.querySelector('.audio-11').addEventListener('click', function() {
    audio1.play();
    audio2.pause();
    audio3.pause();
    audioOn.style.display = 'block'
    audioOff.style.display = 'none'
    audioOnColor.style.display = 'block'
    audioOffColor.style.display = 'none'
})


document.querySelector('.audio-22').addEventListener('click', function () {
    audio1.pause();
    audio2.play();
    audio3.pause();
    audio2.currentTime = 550;
    audioOn.style.display = 'block'
    audioOff.style.display = 'none'
    audioOnColor.style.display = 'block'
    audioOffColor.style.display = 'none'
})


document.querySelector('.audio-33').addEventListener('click', function () {
    audio1.pause();
    audio2.pause();
    audio3.play();
    audioOn.style.display = 'block'
    audioOff.style.display = 'none'
    audioOnColor.style.display = 'block'
    audioOffColor.style.display = 'none'
})


document.querySelector('.audio-on').addEventListener('click', function () {
    audio1.pause()
    audio2.pause()
    audio3.pause()
    audio1.currentTime = 0;
    audio2.currentTime = 700;
    audio3.currentTime = 0;
    audioOn.style.display = 'none'
    audioOff.style.display = 'block'
    audioOnColor.style.display = 'none'
    audioOffColor.style.display = 'block'
    lagu1.classList.remove('setting-music-tema-lagu-lagu-1');
    lagu3.classList.remove('setting-music-tema-lagu-lagu-3');
    lagu2.classList.remove('setting-music-tema-lagu-lagu-2');
    
})


document.querySelector('.audio-off').addEventListener('click', function () {
    audio1.play()
    audio2.pause()
    audio3.pause()
    audio1.currentTime = 0;
    audio2.currentTime = 350;
    audio3.currentTime = 0;
    audioOn.style.display = 'block'
    audioOff.style.display = 'none'
    audioOnColor.style.display = 'block'
    audioOffColor.style.display = 'none'
    lagu1.classList.add('setting-music-tema-lagu-lagu-1');
})



const lagu1 = document.getElementById('audio-1');
const lagu2 = document.getElementById('audio-2');
const lagu3 = document.getElementById('audio-3');

lagu1.addEventListener('click', () => {
    lagu2.classList.remove('setting-music-tema-lagu-lagu-2');
    lagu3.classList.remove('setting-music-tema-lagu-lagu-3');
    lagu1.classList.add('setting-music-tema-lagu-lagu-1');
});

lagu2.addEventListener('click', () => {
    lagu1.classList.remove('setting-music-tema-lagu-lagu-1');
    lagu3.classList.remove('setting-music-tema-lagu-lagu-3');
    lagu2.classList.add('setting-music-tema-lagu-lagu-2');
});

lagu3.addEventListener('click', () => {
    lagu2.classList.remove('setting-music-tema-lagu-lagu-2');
    lagu1.classList.remove('setting-music-tema-lagu-lagu-1');
    lagu3.classList.add('setting-music-tema-lagu-lagu-3');
});











// ============= MOBILE
document.querySelector('#setting-mobile').addEventListener('click', () => {
    const setting = document.querySelectorAll('.setting')

    setting.forEach(element => {
        element.style.display = 'block'

        setTimeout(() => {
            element.style.opacity = '1'
        },40)
    })

     const all = document.querySelectorAll('.materi, .soal, .game,.select-team');
     all.forEach(element => {
        element.style.display = 'none'
        element.style.opacity = '0'
     })
})


document.querySelector('#materi-mobile').addEventListener('click', () => {
    const setting = document.querySelectorAll('.materi')

    setting.forEach(element => {
        element.style.display = 'block'

        setTimeout(() => {
            element.style.opacity = '1'
        },40)
    })

     const all = document.querySelectorAll('.setting, .soal, .game,.select-team');
     all.forEach(element => {
        element.style.display = 'none'
        element.style.opacity = '0'
     })
})

document.querySelector('#soal-mobile').addEventListener('click', () => {
    const setting = document.querySelectorAll('.soal')

    setting.forEach(element => {
        element.style.display = 'block'

        setTimeout(() => {
            element.style.opacity = '1'
        },40)
    })

     const all = document.querySelectorAll('.materi, .setting, .game,.select-team');
     all.forEach(element => {
        element.style.display = 'none'
        element.style.opacity = '0'
     })
})

document.querySelector('#game-mobile').addEventListener('click', () => {
    const setting = document.querySelectorAll('.game')

    setting.forEach(element => {
        element.style.display = 'block'

        setTimeout(() => {
            element.style.opacity = '1'
        },40)
    })

     const all = document.querySelectorAll('.materi, .soal, .setting,.select-team');
     all.forEach(element => {
        element.style.display = 'none'
        element.style.opacity = '0'
     })
})


const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));

















