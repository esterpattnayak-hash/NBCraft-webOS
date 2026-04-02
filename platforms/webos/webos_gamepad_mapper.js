// Gamepad support
export function pollGamepad(){
 const gp=navigator.getGamepads()[0];
 if(!gp) return;
 // basic mapping
 if(gp.buttons[0].pressed) console.log("jump");
}
