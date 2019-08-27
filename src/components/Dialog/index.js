import Dialog from './index.vue';
const DIALOG = {
    install(Vue) {
        Vue.component('Dialog', Dialog);
        Vue.prototype.$Dialog = (options) => {
            let vueDialog = Vue.extend({
                render(h) {
                    let props = {
                        tabledata: options.tabledata,
                        isflag: this.isflag
                    }
                    return h('Dialog', {
                        props,
                        on: {
                            close: () => {
                                this.isflag = false;
                            }
                        }
                    })
                },
                data() {
                    return {
                        isflag: true
                    }
                }
            })
            let newVueDialog = new vueDialog();
            let vm = newVueDialog.$mount();
            let el = vm.$el
            document.body.appendChild(el);
        };

    }
}
export default DIALOG