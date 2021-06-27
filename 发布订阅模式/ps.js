class Ps {

    topicList = []

    // 发布
    publish(topic, data) {

        // 过滤订阅事件
        let currentTopicList = this.topicList.filter(obj => obj.topic == topic);

        // 没有订阅，return
        if(currentTopicList.length == 0) return;

        for(let i of currentTopicList) {
            if(i.callback) i.callback(data);
        }
    }

    // 订阅
    subscribe(topic, callback) {
        let obj = {
            topic,
            callback
        }
        this.topicList.push(obj);
    }

    // 取消订阅
    unSubscribe(topic) {
        let topicIndex = this.topicList.indexOf(topic);
        this.topicList.splice(topicIndex, 1);
    }
}

module.exports = Ps;