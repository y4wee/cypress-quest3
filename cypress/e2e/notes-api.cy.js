// POST /notes
describe("API note", () => {
	let note = require("../fixtures/createNote.json");
	let noteUpdated = require("../fixtures/updateNote.json");

	before(() => {
		// connect and wait for token
		const email = "y4wee@gmail.com";
		const password = "password";
		// Store token as global variable
		cy.request(
			"POST",
			"https://practice.expandtesting.com/notes/api/users/login",
			{
				email,
				password,
			}
		)
			.its("body")
			.then((body) => {
				const token = body.data.token;
				Cypress.env("token", token);
			});
	});

	it("Creates a new note", () => {
		cy.createNote(note).then((response) => {
			cy.log(response);
			expect(response.body.status).to.eq(200);
			Cypress.env("noteId", response.body.data.id);
		});
	});

	it("Gets all notes", () => {
		cy.getNotes().then((response) => {
			cy.log(response);
			expect(response.body.status).to.eq(200);
		});
	});

	it("Updates the note", () => {
		cy.updateNote(noteUpdated).then((response) => {
			cy.log(response);
			expect(response.body.status).to.eq(200);
		});
	});

	it("Deletes the note created", () => {
		cy.deleteNote().then((response) => {
			cy.log(response);
			expect(response.body.status).to.eq(200);
		});
	});
});
