import Login from "../PageObjects/LoginPage";
describe('Updating profil information', () => {
  const ln = new Login() ; 
  beforeEach('Login' , () => {
    window.console.log('Enter the before function')
    cy.session('Login session' , () =>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        
        cy.fixture('connection').then((data) => {
        ln.setUsername(data.username);
        ln.setPassword(data.password);
        ln.clickSubmit();
        ln.verifylogin();
    })
    })
  });

  console.log("*****Verification*****")
  it('Verification', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    ln.verifylogin();
  });

  it(' Page informations ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.get(".oxd-main-menu-item").contains("My Info").click();
  });


})
