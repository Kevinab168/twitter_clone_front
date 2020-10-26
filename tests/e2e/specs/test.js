// https://docs.cypress.io/api/introduction/api.html

// describe('Login Page Elements', () => { 
//   it('Checks user and password inputs', () => {
//     cy.visit('/login')
//     cy.get('[data-test="name-input"]').type('test')
//     cy.get('[data-test="password-input"]').type('test')
//     cy.get('[data-test="login-btn"]').click()
//     cy.url().should('match', /home/)
//   })
// })


// describe('Navbar', () => {
//   it('Checks navbar directs', () => {
//     cy.visit('/home')
//     cy.get('[data-test="home-nav"]').click()
//     cy.url().should('match', /home/)
//     cy.get('[data-test="explore-nav"]').click()
//     cy.url().should('match', /explore/)
//     cy.get('[data-test="profile-nav"]').click()
//     cy.url().should('match', /profile/)
//     cy.get('[data-test="login-nav"]').click()
//     cy.url().should('match', /login/)
//   })
//   it('check from explore home')
// })

// describe('Homepage', () => {
//   beforeEach(() => {
//     const apiUrl = Cypress.env('apiUrl')
//     cy.request('POST', apiUrl, {
//       username: 'test',
//       password: 'test'
//     }).then(response => {
//       const body = response.body
//       console.log(response)
//       const credentials = { 
//         "username": "test",
//         "userID": body.id,
//         "token": body.token
//       }
//       localStorage.setItem("credentials", JSON.stringify(credentials))
//     })
//   })
//   it('Makes a search for a post', () => {
//     // search results are seeded in db 
//     const SEARCH = 'test'
//     cy.get('[data-test="right-search-field"]').type(SEARCH).type('{enter}')
//     cy.get('[data-test="user-search-result"]').contains(SEARCH)
//     cy.get('[data-test="post-tab-box"]').click()
//     cy.get('[data-test="post-search-result"]').contains(SEARCH)
//     cy.get('[data-test="comment-tab-box"]').click()
//     cy.get('[data-test="comment-search-result"]').contains(SEARCH)
    
//   })
// })

// describe('Explore Page Elements', () => { 
//   it('Verifies elements exist on page', () => {
//     cy.visit('/explore')
//     cy.get('[data-test="search-input-box"]')
//     cy.get('[data-test="user-tab-box"]')
//     cy.get('[data-test="post-tab-box"]')
//     cy.get('[data-test="comment-tab-box"]')
//   })
// })

// describe('Profile Page Elements', () => { 
//   it('Verifies elements exist on page', () => {
//     cy.visit('/profile/1')
//     cy.get('[data-test="user-bio"]')
//     cy.get('[data-test="user-avatar"]')
//     cy.get('[data-test="posts-tab-box"]')
//     cy.get('[data-test="comments-tab-box"]')
//     cy.get('[data-test="followers-tab-box"]')
//     cy.get('[data-test="follows-tab-box"]')
//     cy.get('[data-test="right-search-field"]')
//   })
// })


