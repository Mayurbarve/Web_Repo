const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click", ()=>{
    document.addEventListener("keydown", handleDown)
    document.addEventListener("keyUp", handleUp)
    startBtn.disabled = true;
    stopBtn.disabled = false;
})
stopBtn.addEventListener("click", ()=>{
    document.removeEventListener("keydown", handleDown);
    document.removeEventListener("keyUp", handleUp);
    logDiv.textContent = "";
    stateDiv.textContent = "";
    startBtn.disabled = false;
    stopBtn.disabled = true;
})

function handleDown(e){
    logDiv.textContent = `key ${e.key} presses down`;
    stateDiv.textContent = `key is down`;
}
function handleUp(e){
    logDiv.textContent = `key ${e.key} presses down`;
    stateDiv.textContent = `key is down`;
}


console.log('mayura');