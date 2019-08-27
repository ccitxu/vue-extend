import Vue from 'vue'
import App from '@/App.vue';
import vMessage from './components/message/index'
import Dialog from './components/Dialog/index'
import messageBox from './components/messageBox/index'
Vue.use(messageBox)
Vue.use(vMessage)
Vue.use(Dialog)


Vue.directive('demo', {
    bind: function(el, bingind, vnode) {
        el.addEventListener('mouseover', function() {
            console.log(el);
            el.style["color"] = bingind.value;
        })
        el.addEventListener('mouseout', function() {
            el.style["color"] = '';
        })
        console.log("1-bind");
    },
    inserted: function() {
        console.log("2-insert");
    },
    update: function() {
        console.log("3-update");
    },
    componentUpdated: function() {
        console.log('4 - componentUpdated');
    },
    unbind: function() {
        console.log('5 - unbind');
    }
})
const vm = new Vue({
    el: '#app',
    render: h => h(App)
});