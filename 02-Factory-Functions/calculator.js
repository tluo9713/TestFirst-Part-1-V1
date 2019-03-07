


function createCalculator() {
    
    let calculator = {
        display : 0,

        value : function() {
            return this.display;
        },

        add : function(num) {
            this.display += num;
        },

        subtract : function(num) {
            this.display -= num;
        },

        clear : function() {
            this.display = 0;
        }

        
    };



    return calculator;
}