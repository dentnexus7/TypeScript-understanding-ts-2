// let appId = 'abc';
const button = document.querySelector("button")!;

function add(n1: number, n2: number) {
    if(n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}

function clickHandler(message: string) {
    // let userName = "Gregg";
    console.log('Clicked! ' + message);
}

// ! or if statement, no need for both
// a comment
if(button){
    button.addEventListener('click', clickHandler.bind(null, "You're Welcome"));
}