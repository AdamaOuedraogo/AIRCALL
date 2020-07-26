class KeyboardPage{


    constructor(){

        this.call = '[data-test=icon-button-icon]';
   

    }

    dialaphonenumber(numbers){
        for(const num of numbers ){
            cy.get('[data-test=keyboard-key-'+ num +']').click();
        }
        return this;
    }

    call(number){

        this.dialaphonenumber(number);
        const callButton= cy.get(this.call);
        callButton.click();

    }


}

module.exports=KeyboardPage;