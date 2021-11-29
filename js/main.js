const app = new Vue ({
    el: '#root',
    data:{
        lista : [
            {
                text: 'fare la spesa',
                done: true
            },
            {
                text: 'andare in palestra',
                done: false
            },
            {
                text: "fare l'esercizio",
                done: true
            }
        ],
        inputValue: '',
    },

    methods: {
        removeToDo: function(i){
            this.lista.splice(i , 1)
        },
        addToDo: function(){
            this.lista.push({text:this.inputValue, done:false});
            this.inputValue = '';
        },
        

    }
});