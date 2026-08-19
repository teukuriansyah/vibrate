import { Vibrate } from 'vibrate';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    Vibrate.echo({ value: inputValue })
}
