const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];

Vue.createApp({
  data() {
    return {
      index: 3
    }
  },
  methods: {
    prevImage() {
      // TODO: Decrementar el index
      this.index--;
    },

    nextImage() {
      // TODO: Incrementar el index
      this.index++;
    }
  },
  computed: {
    getUrl() {
      const realIndex = Math.abs(this.index) % pictures.length;
      return `url(../img/${pictures[realIndex]}.jpeg)`;
      // tenemos que devolver un string a la ruta de la foto actual. Por ejemplo, la ruta de la primera foto es '../img/pictures[0]'
    }
  }

}).mount('#app')
