// Gameplay Interface
const gameBar = document.getElementsByClassName("gameBar")[0];
const gameMenu = document.getElementsByClassName("gameMenu")[0];

// Person
const galeriaPerson = document.getElementsByClassName("galeriaPerson")[0];
const padre = document.getElementsByClassName("personBox")[0];
const campones = document.getElementsByClassName("personBox")[1];
const guildMaster = document.getElementsByClassName("personBox")[2];
const merchant = document.getElementsByClassName("personBox")[3];
const warrior = document.getElementsByClassName("personBox")[4];
const padeiro = document.getElementsByClassName("personBox")[5];
// TxTs
const charTxt = document.getElementById("charTxt");
// Listeners
document.getElementById("btnStart").addEventListener("click", showGameBar);
padre.addEventListener("mouseover", showPadreTxt);
campones.addEventListener("mouseover", showCamponesTxt);
guildMaster.addEventListener("mouseover", showGuildMasterTxt);
merchant.addEventListener("mouseover", showMerchantTxt);
warrior.addEventListener("mouseover", showWarriorTxt);
padeiro.addEventListener("mouseover", showPadeiroTxt);

galeriaPerson.addEventListener("mouseleave", wrapShowTxt);

// Functions
function showGameBar(){
    gameBar.style.display = "initial";
    gameMenu.style.display = "none";
}

function showPadreTxt(){
    charTxt.innerHTML = "Eu tenho uma suspeita em cima do Mestre da Guilda. Este homem já esteve envolvido em brigas com a vítima há muitos anos atrás devido a uma dívida contraida por uma compra de barril de vinho."
    };
function showCamponesTxt(){
    charTxt.innerHTML = "Na noite anterior do assassinato eu ouvi uma discussão no depósito atrás da igreja. Alguém parecia estar realmente bravo naquele momento! mas não vi ninguém, me desculpe."    
    };
function showGuildMasterTxt(){
    charTxt.innerHTML = "Olá forasteiro...  Barh(soluço) ontem a festa foi uma loucura... bebi todo o hidromel do depósito e tomei um chingão pois aquelas garrafas foram compradas pelo Padre, onde o mesmo iria organizar uma reunião importante do alto clero... estraguei tudo hehehe BerHFk(soluço)."     
    };
function showMerchantTxt(){
    charTxt.innerHTML = "Olha só cara, eu não conheço ninguém nessa MALDITA CIDADE. Passei a noite aqui por conta de uma entrega de fosfato de amônio. Acredito que a infestação de ratos não afetou somente as vilas locais."      
    };
function showWarriorTxt(){
    charTxt.innerHTML =  "Bom dia cidadão, como está? bem, você deve ser um enviado da guarda imperial para investigar o assassinato do Bispo certo? Peço-lhe desculpas, mas ninguém da torre de vigia observou nada de suspeito de fora ontem a noite. O dia passado foi 'estranhamente' calmo. Pelo fato de não ter acontecido nenhum culto na igreja. Durante uma patrulha à tarde no centro da cidade , um guarda me informou um movimento grande em frente a padaria ao lado da Guilda. Fora isso, não me lembro de mais nada!"  
    };
function showPadeiroTxt(){
    charTxt.innerHTML = "Ontem o dia foi uma loucura! Por sorte ainda tinhamos pão e vinho disponíveis na padaria. Deu pra salvar o jantar da igreja!"       
    };

function wrapShowTxt(){
    charTxt.innerHTML = ""

}
