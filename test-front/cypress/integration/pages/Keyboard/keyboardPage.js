class KeyboardPage{


    constructor(){
        this.call = '[data-test=keyboard-button-dial]';
    }

    dialaphonenumber(numbers){
        for(const num of numbers ){
            cy.get('[data-test=keyboard-key-'+ num +']').click();
        }
        return this;
    }

    makeCall(numeros){
        this.dialaphonenumber(numeros);
        const callButton= cy.get(this.call);
        callButton.click();
        return this;
    }   


}

module.exports=KeyboardPage;