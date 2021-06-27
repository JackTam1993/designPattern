const Ps = require('./ps');

let ps = new Ps();

let subscriber = ps.subscribe('food', (data) => {
    console.log('receive data from food' + data)
})

let count = 0;

setInterval(() => {

    if(count == 10) {
        ps.unSubscribe('food');
        return;
    }
    
    ps.publish('food', Math.random() * 10);
    count++
}, 500)