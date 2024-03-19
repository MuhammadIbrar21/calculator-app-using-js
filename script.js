let body = document.getElementById('calc-body');
let dataBox = document.getElementById('dataBox');
let stack = document.getElementById('stack');


let calculateHogyi = false;

dataBox.value = 0;

function handleKey() {
    if (event.srcElement.nodeName != "BUTTON") {
        return;
    }
    let item = event.srcElement.innerText;
    console.log(event.srcElement.innerText);
    if (item == "=") {
        calculateHogyi = true;
        stack.value = dataBox.value + " = " + eval(dataBox.value);
        dataBox.value = eval(dataBox.value);
    } else if (item == '<') {
        dataBox.value = dataBox.value.slice(0, -1);
    } else if (item == 'x2') {
        dataBox.value = Math.pow(dataBox.value, 2);
        stack.value = `sqr(${Math.sqrt(dataBox.value)})`;
    } else if (item == 'C') {
        dataBox.value = 0;
        stack.value = '';
    } else {
        let nubmerH = !isNaN(item);
        if (nubmerH && calculateHogyi) {
            dataBox.value = item;
            calculateHogyi = false;
        } else {
            if (event.srcElement.innerText == 'x') {
                dataBox.value += '*';
            } else {
                if (dataBox.value == '0') {
                    dataBox.value = dataBox.value.slice(0, 0);
                    dataBox.value += item;
                } else {
                    dataBox.value += item;
                }
            }
        }
    }
}