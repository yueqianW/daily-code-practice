import _ from 'lodash'
import './assets/styles/style.css'
import Icon from './assets/images/1.png'
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);


    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}