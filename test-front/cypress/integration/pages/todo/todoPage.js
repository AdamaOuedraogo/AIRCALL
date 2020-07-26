class TodoPage{
    constructor(){
        this.keypadTab ='[data-test=tab-bar-keypad]';
    }



    accesKeybord(){

        const button = cy.get(this.keypadTab);
        button.click();
    }
}

module.exports=TodoPage;