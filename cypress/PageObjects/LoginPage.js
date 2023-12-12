class Login 
{
    InputUsername = "input[name='username']";
    InputPassword = "input[name='password']"; 
    ButtonSubmit = "button[class*='oxd-button']";
    FielUsername = "p[class*='oxd-userdropdown-name']"; 
    TitleDashboard = ".oxd-topbar-header-breadcrumb > .oxd-text" ;

    setUsername(username) {
        cy.get(this.InputUsername).type(username);
    }

    setPassword(password) {
        cy.get(this.InputPassword).type(password);
    }

    clickSubmit() {
        cy.get(this.ButtonSubmit).click();
    }

    verifylogin(){
        cy.get(this.FielUsername).then((x) =>{
            expect(x).to.be.visible;
          })
          cy.get(this.TitleDashboard).should('have.text' , "Dashboard")
    }
}
export default Login;