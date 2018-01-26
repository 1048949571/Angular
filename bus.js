function bus(Vue,optioins){
    window.bus = new Vue();
    Vue.prototype.bus = window.bus;
}
export default {
    install:bus
}