(window["webpackJsonpmy-games"]=window["webpackJsonpmy-games"]||[]).push([[0],[,function(e){e.exports=JSON.parse('{"en":{"main":"Main Page","tictactoe":"Tic Tac Toe","paddle":"Paddle game","settings":"Settings","welcome":"Welcome","title":"Do you want to play a game?","winner":"Congrats, the winner is: ","noWinner":"There is now winner","taken":"This one is taken!","rstBtn":"Reset Game","yourScore":"Your score: ","hghScore":"Highest score: ","resetPg":"Reset Game","fullScr":"Full Screen","how":"How to play:","manual":"Use your mouse to hover over the board and control the paddle with it. To set to highest score: bounce the ball to beat to latest score.","lang":"Choose your language:","speed":"Choose your speed:","easySpeed":"Easy peasy","mediumSpeed":"A bit harder","fastSpeed":"Crazy"},"pl":{"main":"Strona G\u0142\xf3wna","tictactoe":"K\xf3\u0142ko i Krzy\u017cyk","paddle":"Gra Paddle","settings":"Ustawienia","welcome":"Witaj","title":"Chcesz zagra\u0107 w gr\u0119?","winner":"Gratulacje, wygra\u0142 gracz: ","noWinner":"Nie ma zwyci\u0119zcy","taken":"To miejsce jest zaj\u0119te!","rstBtn":"Zresetuj gr\u0119","yourScore":"Tw\xf3j wynik:","hghScore":"Najlepszy wynik:","resetPg":"Zresetuj gr\u0119","fullScr":"Pe\u0142ny ekran","how":"Jak gra\u0107:","manual":"U\u017cyj myszki nad tablic\u0105 gry aby kontrolowa\u0107 podstawk\u0105. Aby ustanowi\u0107 najlepszy wynik: odbijaj pi\u0142k\u0119, aby pobi\u0107 poprzedni wynik","lang":"Wybierz j\u0119zyk:","speed":"Wybierz pr\u0119dko\u015b\u0107:","easySpeed":"\u0141atwizna","mediumSpeed":"Troche ci\u0119\u017cej","fastSpeed":"Czyste szale\u0144stwo"},"de":{"main":"Hauptseite","tictactoe":"Nullen und Kreuze","paddle":"Paddle Spiel","settings":"Einstellungen","welcome":"Willkommen","title":"Willst du ein Spiel spielen?","winner":"Gratulation, der Gewinner ist: ","noWinner":"Niemand hat gewonnen","taken":"Das ist besetzt!","rstBtn":"Reset Spiel","yourScore":"Deine Punktzahl: ","hghScore":"Die beste Punktzahl: ","resetPg":"Reset Spiel","fullScr":"Vollbildmodus","how":"Wie darf mann spielen:","manual":"Bewege den Mauszeiger \xfcber den Tafel und steuere das Paddel damit. So stellen Sie die h\xf6chste Punktzahl ein: Lassen Sie den Ball abprallen, um die letzte Punktzahl zu schlagen.","lang":"W\xe4hlt die Sprache:","speed":"W\xe4hlt die Geschwindigkeit:","easySpeed":"Schw\xe4chling","mediumSpeed":"Ein bisschen schwerer","fastSpeed":"Verr\xfcckt"}}')},,,,,,,,,,,,,,,function(e,t){e.exports={EventEmitter:{events:{},dispatch:function(e,t){this.events[e]&&this.events[e].forEach(function(e){e(t)})},subscribe:function(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)}}}},,,,,,,function(e,t,a){e.exports=a.p+"static/media/x.86a48683.jpg"},function(e,t,a){e.exports=a.p+"static/media/o.a59aafee.jpg"},,,function(e,t,a){e.exports=a(43)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(22),i=a.n(s),r=(a(32),a(6)),o=a(7),c=a(9),g=a(8),m=a(10),u=a(13),h=a(11),d=(a(33),a(34),a(1)),p=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"setLang",value:function(e){localStorage.setItem("language",e)}},{key:"render",value:function(){return l.a.createElement("div",{className:"home-page"},l.a.createElement("p",null,d[localStorage.getItem("language")].welcome),l.a.createElement("p",null,d[localStorage.getItem("language")].title))}}]),t}(l.a.Component),b=(a(35),a(23)),S=a.n(b),f=a(24),v=a.n(f),E=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(g.a)(t).call(this))).sameVertical=function(){for(var t=e.state.board,a=0;a<=6;a+=3)if(t[a]&&t[a+1]&&t[a+2]&&t[a]===t[a+1]&&t[a+1]===t[a+2])return!0},e.sameHorizontal=function(){for(var t=e.state.board,a=0;a<3;a++)if(t[a]&&t[a+3]&&t[a+6]&&t[a]===t[a+3]&&t[a+3]===t[a+6])return!0},e.sameAcrossRight=function(){var t=e.state.board;if(t[2]&&t[4]&&t[6]&&t[2]===t[4]&&t[4]===t[6])return!0},e.sameAcrossLeft=function(){var t=e.state.board;if(t[0]&&t[4]&&t[8]&&t[0]===t[4]&&t[4]===t[8])return!0},e.state={turn:0,board:["","","","","","","","",""],gameEnabled:!0},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"checkGameStatus",value:function(e){this.state.gameEnabled&&(this.sameAcrossRight(e)||this.sameAcrossLeft(e)||this.sameVertical(e)||this.sameHorizontal(e)?this.endGame(e):this.state.turn>7&&this.endGame(!1))}},{key:"computerTurn",value:function(){var e=this.state.board;var t=function(){var e=Math.ceil(0),t=Math.floor(8);return Math.floor(Math.random()*(t-e+1))+e}();if(""!==e[t])return this.state.gameEnabled&&this.state.board.indexOf("")>=0?void this.computerTurn():void 0;e[t]="X",this.setState({turn:this.state.turn+1,board:e}),this.checkGameStatus("X")}},{key:"onFieldClick",value:function(e){if(this.state.gameEnabled){""!==this.state.board[e]?this.setState({error:l.a.createElement("p",{className:"error"},d[localStorage.getItem("language")].taken)}):this.setState({error:!1});var t=this.state.board;t[e]="O",this.setState({turn:this.state.turn+1,board:t,index:this.state.board[e]},this.computerTurn),this.checkGameStatus("O")}}},{key:"resetGameBoard",value:function(){this.setState({board:["","","","","","","","",""],turn:0,gameEnabled:!0,error:!1})}},{key:"endGame",value:function(e){this.setState({gameEnabled:!1,winner:e}),this.state.gameEnabled}},{key:"checkIfFieldIsNotEmpty",value:function(e){return e.length>0?"game-board--field game-board--field--disabled":"game-board--field"}},{key:"render",value:function(){var e,t=this;this.state.gameEnabled||(e=this.state.winner?l.a.createElement("p",null,d[localStorage.getItem("language")].winner," ",this.state.winner):l.a.createElement("p",null,d[localStorage.getItem("language")].noWinner));var a=this.state.error;return l.a.createElement("div",{className:"game-container background-ttt"},e,a?l.a.createElement("div",{className:"error"}," ",a," "):"",l.a.createElement("div",{className:"game-board"},this.state.board.map(function(e,a){return l.a.createElement("div",{className:"game-board--field",key:a,onClick:t.onFieldClick.bind(t,a)},l.a.createElement("div",{className:"game-board--field-content"},"X"===e?l.a.createElement("img",{src:S.a,alt:"X"}):"O"===e?l.a.createElement("img",{src:v.a,alt:"O"}):null))})),l.a.createElement("button",{onClick:this.resetGameBoard.bind(this),className:"btn"},d[localStorage.getItem("language")].rstBtn))}}]),t}(l.a.Component),y=a(15),k=(a(36),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(g.a)(t).call(this))).game={gameSpeed:1e3,gameBoard:null,context:null,ballX:100,ballY:100,ballSpeedX:5,ballSpeedY:7,paddleWidth:100,paddleHeight:10,paddleDistFromEdge:60,paddleX:400},e.state={gameRefreshInterval:null,bounces:0,highScore:null,isFullScreen:!1},localStorage.getItem("highScore")>5&&localStorage.getItem("highScore")<10&&(e.game.gameSpeed=500),localStorage.getItem("highScore")>10&&(e.game.gameSpeed=250),e.updateAll=e.updateAll.bind(Object(y.a)(e)),e.updateMousePosition=e.updateMousePosition.bind(Object(y.a)(e)),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"setSpeed",value:function(){""!==localStorage.getItem("speed")&&(this.game.gameSpeed=localStorage.getItem("speed"))}},{key:"componentDidMount",value:function(){this.game.gameBoard=this.refs.canvas,this.game.context=this.refs.canvas.getContext("2d"),this.printElements(),this.refs.canvas.addEventListener("mousemove",this.updateMousePosition)}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.gameRefreshInterval)}},{key:"updateDirection",value:function(){this.game.ballX+=this.game.ballSpeedX,this.game.ballY+=this.game.ballSpeedY,this.game.ballX<0&&(this.game.ballSpeedX*=-1),this.game.ballX>this.game.gameBoard.width&&(this.game.ballSpeedX*=-1),this.game.ballY<0&&(this.game.ballSpeedY*=-1),this.game.ballY>this.game.gameBoard.height&&(this.resetBall(),this.setState({bounces:0}));var e=this.game.gameBoard.height-this.game.paddleDistFromEdge,t=e+this.game.paddleHeight,a=this.game.paddleX,n=a+this.game.paddleWidth;this.game.ballY>e&&this.game.ballY<t&&this.game.ballX>a&&this.game.ballX<n&&(this.game.ballSpeedY*=-1,this.setState({bounces:this.state.bounces+1}),this.setHighScore())}},{key:"setHighScore",value:function(){var e=localStorage.getItem("highScore");e<this.state.bounces&&(localStorage.setItem("highScore",this.state.bounces),this.setState({highScore:e}))}},{key:"printElements",value:function(){var e=this.game.context;e.fillStyle="black",e.fillRect(0,0,this.game.gameBoard.width,this.game.gameBoard.height),e.fillStyle="magenta",e.fillRect(this.game.paddleX,this.game.gameBoard.height-this.game.paddleDistFromEdge-this.game.paddleHeight,this.game.paddleWidth,this.game.paddleHeight),e.fillStyle="gold",e.beginPath(),e.arc(this.game.ballX,this.game.ballY,10,0,2*Math.PI,!0),e.fill()}},{key:"updateAll",value:function(){this.game.gameSpeed=this.game.gameSpeed,this.printElements(),this.updateDirection()}},{key:"updateMousePosition",value:function(e){var t=this.refs.canvas.getBoundingClientRect(),a=e.clientX-t.left;this.game.paddleX=a-this.game.paddleWidth/2}},{key:"resetBall",value:function(){this.game.ballX=this.game.gameBoard.width/2,this.game.ballY=this.game.gameBoard.height/4}},{key:"setCanvasSize",value:function(){return this.state.isFullScreen?"gameBoard gameBoard--full-screen":"gameBoard"}},{key:"toggleFullScreen",value:function(){this.setState({isFullScreen:!this.state.isFullScreen})}},{key:"resetScore",value:function(){localStorage.setItem("highScore","0"),this.setState({bounces:0})}},{key:"startStopGame",value:function(){this.state.gameRefreshInterval?(clearInterval(this.state.gameRefreshInterval),this.setState({gameRefreshInterval:null})):(this.setSpeed(),this.setState({gameRefreshInterval:setInterval(this.updateAll,this.game.gameSpeed/30)}))}},{key:"render",value:function(){var e;return e=this.state.gameRefreshInterval?l.a.createElement("button",{className:"btn btn-pg",onClick:this.startStopGame.bind(this)},"Stop"):l.a.createElement("button",{className:"btn btn-pg",onClick:this.startStopGame.bind(this)},"Start"),l.a.createElement("div",{className:"background-pg"},l.a.createElement("div",{className:"board"},l.a.createElement("div",{className:"scoreBoard"},l.a.createElement("h2",null,d[localStorage.getItem("language")].yourScore," ",l.a.createElement("span",null,this.state.bounces)),l.a.createElement("h2",null,d[localStorage.getItem("language")].hghScore," ",l.a.createElement("span",null,localStorage.getItem("highScore")))),l.a.createElement("div",{className:"buttonsBoard"},l.a.createElement("button",{className:"btn btn-pg",onClick:this.resetScore.bind(this)},d[localStorage.getItem("language")].resetPg),e,l.a.createElement("button",{className:"btn btn-pg",onClick:this.toggleFullScreen.bind(this)},d[localStorage.getItem("language")].fullScr)),l.a.createElement("canvas",{onDoubleClick:this.toggleFullScreen.bind(this),className:this.setCanvasSize(),ref:"canvas",width:"700",height:"500"}),l.a.createElement("div",{className:"manual"},l.a.createElement("h5",null,d[localStorage.getItem("language")].how),l.a.createElement("h6",null,d[localStorage.getItem("language")].manual))))}}]),t}(l.a.Component)),w=(a(37),a(16)),I=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"setLang",value:function(e){localStorage.setItem("language",e),w.EventEmitter.dispatch("languageChange",!0)}},{key:"setSpeed",value:function(e){localStorage.setItem("speed",e),w.EventEmitter.dispatch("speedChange",!0)}},{key:"render",value:function(){return l.a.createElement("div",{className:"background-s"},l.a.createElement("div",{className:"langs"},l.a.createElement("h5",null,d[localStorage.getItem("language")].lang),l.a.createElement("button",{className:"btn btn-s",onClick:this.setLang.bind(this,"pl")},"PL"),l.a.createElement("button",{className:"btn btn-s",onClick:this.setLang.bind(this,"en")},"EN"),l.a.createElement("button",{className:"btn btn-s",onClick:this.setLang.bind(this,"de")},"DE")),l.a.createElement("div",{className:"speed"},l.a.createElement("h5",null,d[localStorage.getItem("language")].speed),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",name:"speed",value:"easy",className:"radioBtn",onClick:this.setSpeed.bind(this,800)}),d[localStorage.getItem("language")].easySpeed),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",name:"speed",value:"medium",className:"radioBtn",onClick:this.setSpeed.bind(this,500)}),d[localStorage.getItem("language")].mediumSpeed),l.a.createElement("div",null,l.a.createElement("input",{type:"radio",name:"speed",value:"hard",className:"radioBtn",onClick:this.setSpeed.bind(this,250)}),d[localStorage.getItem("language")].fastSpeed)))}}]),t}(l.a.Component),j=function(e){function t(){var e;Object(r.a)(this,t),(e=Object(c.a)(this,Object(g.a)(t).call(this))).state={appRefreshed:null};return(!localStorage.getItem("language")||"string"!==typeof localStorage.getItem("language")||["en","pl","de"].indexOf(localStorage.getItem("language"))<0)&&localStorage.setItem("language","en"),w.EventEmitter.subscribe("languageChange",function(t){e.setState({appRefreshed:new Date})}),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"setLang",value:function(e){localStorage.setItem("language",e)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement("div",null,l.a.createElement("nav",{className:"nav"},l.a.createElement(u.b,{className:"nav-item",to:"/"},d[localStorage.getItem("language")].main),l.a.createElement(u.b,{className:"nav-item",to:"/tictactoe"},d[localStorage.getItem("language")].tictactoe),l.a.createElement(u.b,{className:"nav-item",to:"/paddle"},d[localStorage.getItem("language")].paddle),l.a.createElement(u.b,{className:"nav-item",to:"/settings"},d[localStorage.getItem("language")].settings)),l.a.createElement("div",null,l.a.createElement(h.a,{exact:!0,path:"/",component:p}),l.a.createElement(h.a,{path:"/tictactoe",component:E}),l.a.createElement(h.a,{path:"/paddle",component:k}),l.a.createElement(h.a,{path:"/settings",component:I})))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[27,1,2]]]);
//# sourceMappingURL=main.4b673a8d.chunk.js.map