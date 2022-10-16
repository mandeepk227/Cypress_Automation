describe('API testing', () => {

    it('POST api', () => {
        const url = 'http://216.10.245.166/Library/Addbook.php'
        const data = {
            "name": "nully",
            "isbn": `${Math.floor(Math.random() * 999)}`,
            "aisle": "2587",
            "author": "kumar"
        }
        cy.request('POST', url, data).then((response) => {
            cy.log(response.headers)
            console.log(response)
            expect(response.body.Msg).to.be.eq('successfully added')
        })
    })
})