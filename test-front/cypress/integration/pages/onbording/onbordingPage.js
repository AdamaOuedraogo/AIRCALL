class OnbordingPage{

    constructor(){

        this.fr='[data-test=language_fr-FR]'
        this.en='[data-test=language_en-US]';
        this.es='[data-test=language_es-ES]';
        this.de='[data-test=language_de-DE]';
        this.textTitle='[data-test=title-text]';
        this.continueButton = '[data-test=continue-button]';
        this.nextButton = '[data-test=next-button]';
        

    }

    selectLanguageFR(){
        const field = cy.get(this.fr);
        field.click();
        return this;

    }

    selectLanguageEN(){
        const field = cy.get(this.en);
        field.click();
        return this;

    }
    selectLanguageDE(){
        const field = cy.get(this.de);
        field.click();
        return this;

    }
    selectLanguageES(){
        const field = cy.get(this.es);
        field.click();
        return this;

    }
    continuePage(){
        const button = cy.get(this.continueButton);
        button.click();
    }

    nextPage(){
        const button=cy.get(this.nextButton);
        button.click(); 
    }
    
}

module.exports=OnbordingPage;