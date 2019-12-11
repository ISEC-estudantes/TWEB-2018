
var state = localStorage.getItem("act");

function setTrue() {
    window.localStorage.setItem("act", 1);
    state = 1;
}

function setFalse() {
    window.localStorage.setItem("act", 0);
    state = 0;
}

//testes
function nrefresh() {
    return false;
}

/*username*/
var username = localStorage.getItem("nome");    

function getusername(){   
    var username = window.localStorage.getItem("nome");    
}
getusername();

function alertar(nome){
   localStorage.setItem("nome",nome);
}

$(document).ready(function () {

    //slideshow
    function slideSwitch() {

        var $ativa = $('#slideshowimg img.active');
        var $proxima = $ativa.next();

        if ($ativa.next().length == 1) {
            $proxima = $ativa.next();
        } else {
            $proxima = $('#slideshowimg img:first');
        }

        $ativa.addClass('last-active');
        $ativa.removeClass('active');


        $proxima.addClass('active')
            .css({
                opacity: 0.0
            })
            .animate({
                opacity: 1.0
            }, 2000, function () {
                $ativa.removeClass('last-active');
            });
    }
    setInterval(slideSwitch, 5000);
    $("#slideshowimg").click(slideSwitch);

    {
        //login
        /*
        function validation() {
            var name = document.getElementById('name').value;
            var zero = document.getElementById('0').value;
            var um = document.getElementById('1').value;
            if (name == '' || 0 == '' || 1 == '') {
                document.getElementById("eresult").innerHTML = "beylha";
                return false;
            } else if (name.legth < 4) {
                document.getElementById("eresult").innerHTML = "Nome tem de ter pelo menos 4 letras";
                return false;
            } else if (zero.length < 8) {
                document.getElementById("eresult").innerHTML = "password tem de ter pelo menos 8 letras";
                return false;
            } else {
                return true;
            }
        }*/
    }


    //navbar for mobile   
    var masculinidade = 1;

    function ARNALDO() {
        if (masculinidade == 1) {

            if (Modernizr.mq('(min-width: 1000px)')) {
                if ($("#navtop").css("visibility") == "hidden") {
                    $("#navtop").css("visibility", "visible");
                }
            } else {
                if ($("#navtop").css("visibility") == "visible") {
                    $("#navtop").css("visibility", "hidden");
                }
            }
        }
    }

    $("#buttontoggle").click(function () {
        if ($("#navtop").css("visibility") == "hidden") {
            masculinidade = 0;
            $("#navtop").css("visibility", "visible");

        } else {
            $("#navtop").css("visibility", "hidden");
            masculinidade = 1;
        }

    });

    $("#buttonclose").click(function () {
        masculinidade = 1;
        $("#navtop").css("visibility", "hidden");
    });

    setInterval(ARNALDO, 500);

    //login and logout stuff windows
    //esta funcao serve para mostrar o menu de login e mudar a cor do butao
    //para login para cor pink quando a janela esta aberta
    function hideLogin() {
        $("#loginbox").css("visibility", "hidden");
        $("nav .troncar , #troncar").css("color", "white");
    }
    $(".troncar , #troncar").click(function () {
        if ($("#loginbox").css("visibility") == "hidden") {
            $("#loginbox").css("visibility", "visible");
            $("nav .troncar , #troncar").css("color", "pink");
        } else {
            hideLogin();
        }
    });



    $("#closelogin").click(function () {
        hideLogin();

    });

    //loggedin
    //teste para a variave local


    {
        //esta funcao faz dessaparecer e aparecer o menu de login
        /*
            $('#check').click(function(){
                if ($(this).prop("checked") == true) {
                    if ($("#loginbox").css("visibility") == "hidden") {
                        $("#loginbox").css("visibility", "visible");
                        $("nav .troncar , #troncar").css("color", "pink");
                    } else {
                        $("#loginbox").css("visibility", "hidden");
                        $("nav .troncar , #troncar").css("color", "white");
                    }
                   if(("#logdiv").css("visibility" )=="hidden"){
                    $("#logdiv").css("visibility", "visible");
                   }
                   
                } else if ($(this).prop("checked") == false) {
                    $("#logdiv").css("visibility", "visible");
                }
            });
        */
    }

    function logged() {
        //getusername();
        if(1){
            $("#troncar").html(username);
        }else{
            $("#troncar").html(Destroncar);
        }
        $(".in").css("display", "none");
        $(".out").css("display", "unset");
        /*
        $("#loginbox").html(
            '<p id="closelogin">X</p><h2>Troncação</h2><form id="loginform"><div id="logdiv" class=""><p>Queres mesmo Destroncar?</p></div><input type="button" id="submit" value="Destroncar"><br></br></form>'
        );
        */
    }

    function unlogged() {
        $("#troncar").html("Troncar");
        $(".out").css("display", "none");
        $(".in").css("display", "unset");
        /*
        $("#loginbox").html(
            '<p id="closelogin">X</p><h2>Troncação</h2><input type="checkbox" checked id="check">Com conta <br><br><form id="loginform"><div id="logdiv" class=""><input required pattern="user" type="text" id="user" placeholder="Username"><br><input required pattern="pass" type="password" id="pass" placeholder="Password"><br><br></div><input type="button" id="submit" value="Troncar"><br></br></form>'
            );
            */
    }

    {
        //nesta função verifica se se a tens algum erro na janela de login e da
        //ajuda para que dados devem ser preenchidos se todos os dados estiverem bem 
        //o login sera efectudado e mudara de pagina(caso se esteja no login em base de 
        //diferentes paginas de html) ou mudara o texto de "trocar aqui"(metodo basiado so em js)    
    }

    $("#login").on("submit", function () {
        submitin();
        return false;
    });

    function submitin() {
   /* if (state != 1) {
            if (($('#user').val() != "user") && ($('#pass').val() != "pass")) {
                alert('insira "pass" na caixa da password e "user" na caixa do username');
            } else if ($('#pass').val() != "pass") {
                alert('insira "pass" na caixa da password');
            } else
            if ($('#user').val() != "user") {
                alert('insira "user" na caixa do username');
            } else {           */    
                alertar($("#user").val()); 
                getusername();
                //logged();
                setTrue();
                location.reload(); 
                //hideLogin();
                
          //  }
       // }
    }


    $("#logout").on("submit", function () {
        submitout();
        return false;
    });

    function submitout() {
        setFalse();
        unlogged();
        hideLogin();
    }

    if (state == 1) {
        logged();
    } else {
        unlogged();
    }

    /***** estrelinhas do ceu(rating) ****/

    $("label").click(function () {
        $(this).parent().find("label").css({
            "background-color": "transparent"
        });
        $(this).css({
            "background-color": "green"
        });
        $(this).nextAll().css({
            "background-color": "green"
        });
    });
    
    //$(".rating").

    $("#load").css("display", "none");
});