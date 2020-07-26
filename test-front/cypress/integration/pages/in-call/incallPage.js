class InCallPage{

    constructor(){

        this.muteButton = '[data-test=action-mute]';
        this.unmuteButton = '[data-test=action-unmute]';
        this.holdButton = '[data-test=action-hold]';
        this.unholdButton = '[data-test=action-unhold]';
        this.notesButton = '[data-test=notes-button]';
        this.tagsButton = '[data-test=tags-button]';
        this.assignButton = '[data-test=assign-button]';
        this.AddOrCallButton = '[data-test=add-or-call-button]';
        this.transferButton = '[data-test=transfer-button]';
        this.endCallButton = '[data-test=icon-button-tooltip]';
        this.startRecordingButton = '[data-test=action-start-recording]';
        this.closemodalButton = '[data-test=modal-close]';
        this.tagpaneldone = '[data-test=tags-panel-done]';
        this.notespaneldoneButton= '[data-test=notes-panel-done]';
        this.notetextarea = '[data-test=note-textarea]';
        // this.assignModalTitle = '[data-test=title-text]';
        this.url=Cypress.env('baseUrl') + 'incall'

    }

    mute(){
        return cy.get(this.muteButton).click();
    }
    unmute(){
        return cy.get(this.unmuteButton).click();
    }

    hold(){
        return cy.get(this.holdButton).click();
    }
    unhold(){
        return cy.get(this.unholdButton).click();
    }   

    openNotes(){
        return cy.get(this.notesButton).click();
    }

    setNotes(messages){
        return cy.get(this.notetextarea).type(messages);
    }
    saveNotes(){
        return cy.get(this.notespaneldoneButton).click();
    }

    tags(){

        return cy.get(this.tagsButton).click();
        
    }

    getTagPanelDone(){
        return cy.get(this.tagpaneldone);
    }
    assign(){
        return cy.get(this.assignButton).click();

    }
    closeassignModal(){
        return cy.get(this.closemodalButton).click();
    }
    getassignclosemodalButton(){
        return cy.get(this.closemodalButton);
    }



    transfer(){

    }

    endCall(){
        return cy.get(this.endCallButton).click();
        
    }
    recording(){
        return cy.get(this.startRecordingButton).click();
    }

    getRecording(){
        return cy.get(this.startRecordingButton);
    }

    getmuteButton(){
        return cy.get(this.muteButton);
    }
    getHoldbutton(){
        return cy.get(this.holdButton);
    }

    getunmunteButton(){
        return cy.get(this.unmuteButton);
    }

    getunholdButton(){
        return cy.get(this.unholdButton);
    }
    

    getUrl(){
        return this.url;
    }


}

module.exports = InCallPage;