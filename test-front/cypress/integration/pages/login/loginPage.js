class LoginPage {

	constructor() {
		
		this.username = '[data-test=signin-email-input]';
		this.password = '[data-test=signin-password-input]';
		this.submitButton = '[data-test=signin-button]';
		this.url = Cypress.env('baseUrl');
		this.jsessionID = 'JSESSIONID';

	}

	visit() {  
		cy.visit(this.url);
	}

	getUrl(){
		return this.url;
	}


	getJsessionId(){
		return this.jsessionID;
	}


	setUsername(value) {
		const field = cy.get(this.username);
		field.type(value);			
		return this
	}
	setPassword(value) { 
		const field = cy.get(this.password)
		field.type(value);    
		return this;
	}

	submit() {    
		return cy.get(this.submitButton).click({force: true});
	}

	onLogin(user, pass){ 
		this.visit();      
		this.setUsername(user);
		this.setPassword(pass);
		this.submit();
		return this;	  
	}	

}
module.exports = LoginPage;



