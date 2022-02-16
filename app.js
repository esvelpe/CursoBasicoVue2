new Vue({
    el: '#app',

    data (){
        return {
            name: 'Bitcoin',
            symbol: 'BTC',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent:-1,
            //prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],

            color: 'f4f4f4',

            price:9000,

            pricesWithDays: [
                { day: 'Lunes', value: 8400 },
                { day: 'Martes', value: 7900 },
                { day: 'Miercoles', value: 8200 },
                { day: 'Jueves', value: 9000 },
                { day: 'Viernes', value: 9400 },
                { day: 'Sabado', value: 10000 },
                { day: 'Domingo', value: 10200 },
            ],

            showPrices: true
        }

    },
    computed: {
        title (){
            return `${this.name} - ${this.symbol}`
        }
    },

    watch: {
        showPrices(newVal,oldVal){
            console.log(newVal,oldVal)
        }
    },

    methods: {
        toggleShowPrices(){
            this.showPrices=!this.showPrices

            this.color=this.color.split('').reverse().join('')
        }
    }
})