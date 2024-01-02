$('.a').click(
    function(){
        $('h1').hide()
    }
)

$('.b').click(
    function(){
        $('h1').show()
    }
)

$('.c').click(
    function(){
        $('h1').toggle()
    }
)

$('.d').click(
    function(){
        $('h1').slideUp(1000)
    }
)

$('.e').click(
    function(){
        $('h1').slideDown()
    }
)

$('.f').click(
    function(){
        $('h1').slideToggle()
    }
)

$('.g').click(
    function(){
        $('h1').fadeOut(1000)
    }
)

$('.h').click(
    function(){
        $('h1').fadeIn()
    }
)

$('.i').click(
    function(){
        $('h1').fadeToggle()
    }
)

$('.j').click(
    function(){
        $('h1').fadeTo(1000,0.3)
    }
)

$('.k').click(
    function(){
        $('h1').addClass('new')
    }
)

$('.l').click(
    function(){
        $('h1').removeClass('new')
    }
)

$('.m').click(
    function(){
        $('h1').toggleClass('new')
    }
)

$('.n').click(function() {
    $('h1').css({
        background: 'red',
        color: 'pink',
        fontSize: '77px'
    });
});

$('.o').click(function(){
    $('h1').append('<input>')
}

)

$('.p').click(function(){
    $('h1').prepend('<p>Hello</p>')
})

$('.q').click(function(){
    $('h1').after('<p>Hi</p>')
})

$('.r').click(function(){
    $('h1').before('<p>Hlw</p>')
})

$('.s').click(function(){
    $('h1').remove()
})

$('.t').click(function(){
    $('h1').empty()
})

$('.u').click(function(){
    $('h1').html('hello');
});

$('.v').click(function(){
    $('.aa').val('Amish')
})  

$('.z').click(function(){
    $('h1').animate({left:'400px'},4000)
})

$('.zz').click(function(){
    $('h1').stop()
})
