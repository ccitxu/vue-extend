import messageBox from './index.vue'
export default function(Vue) {
    const Constructor = Vue.extend(messageBox);
    const Instance = new Constructor();
    Instance.$mount();
    document.body.appendChild(Instance.$el);
    Vue.prototype.$messageBox = ({ title, content }) => {
        Instance.isDialog = true;
        Instance.title = title;
        Instance.content = content;
        return Instance.showMsgBox()
            .then(val => {
                return Promise.resolve(val);
            })
            .catch(err => {
                return Promise.reject(err);
            });
    }
}