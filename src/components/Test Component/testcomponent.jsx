// function initButtons ( ) {
//     var body = document .body,
//     button, i;
//     for (i = 0; i < 5; i++) {
//     button = document.createElement ( "button');
//     button. innerHTML = Button ${i} ;
//     button.addEventListener( 'click', e =>t
//     alert(i);
//     body.appendChild (button ) ;
//     initButtons();

const InitButtons = () =>{
    var body = document .body,
button, i;

for (i = 0; i < 5; i++) {
    button = document.createElement('button');
    button.innerHTML = `Button ${i}` ;
    button.addEventListener( 'click', e =>{alert(i);});
    body.appendChild (button ) ;
}
    
}

export default InitButtons;