import _ from 'lodash'
import './assets/styles/style.css'
import Icon from './assets/images/1.png'
import printMe from './print.js';
import { cube } from './math.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    var preElement = document.createElement('pre');
    let originDiv = document.createElement('div')

    originDiv.innerHTML = `<div>
        <div>
            <div>Javascript</div>
            <div>
                <div>111</div>
                <div>222</div>
                <div>333</div>
                <div>444</div>
                <div>555</div>
            </div>
        </div>
        <div>
            <div>Javascript</div>
        </div>
        <div>
            <div>Javascript</div>
        </div>
    </div>`
    element.appendChild(originDiv);

    // Lodash, now imported by this script
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello');

    // 将图像添加到我们现有的 div。
    // var myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon);

    // 按钮
    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;
    // element.appendChild(btn);

    // 数学
    // preElement.innerHTML = [
    //     `Hello webpack!, 5 cubed is equal to ` + cube(5)
    // ].join('\n\n');
    // element.appendChild(preElement);

    return element;
}

// document.body.appendChild(component());
// let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
// document.body.appendChild(element);

// if (module.hot) {
//     module.hot.accept('./print.js', function () {
//         console.log('Accepting the updated printMe module!');
//         // printMe();
//         document.body.removeChild(element);
//         element = component(); // 重新渲染页面后，component 更新 click 事件处理
//         document.body.appendChild(element);
//     })
// }