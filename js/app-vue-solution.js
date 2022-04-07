Vue.createApp({
    data(){
        return{
            pictures:[
                "contBcg-0",
                "contBcg-1",
                "contBcg-2",
                "contBcg-3",
                "contBcg-4"
            ],
            index: 0,
            actualSlider: ''
        }
    },
    methods:{
        nextImage(){
            this.index = this.index < this.pictures.length-1 ? this.index +1:0
        },
        prevImage(){            
            this.index = this.index > 0 ? this.index -1: this.pictures.length-1            
        }
    },
    computed:{
        imgComputed(){
            return `./img/${this.pictures[this.index]}.jpeg`;
        }
    }
}).mount('#app')