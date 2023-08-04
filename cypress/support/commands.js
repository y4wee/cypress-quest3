// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// CREATE NOTE
Cypress.Commands.add("createNote", (note) => {
	// {
	//     title: "string",
	//     description: "string",
	//     category: ["Home", "Work", "Personal"]
	// }
	cy.request({
		method: "Post",
		url: "notes",
		body: note,
		headers: {
			"x-auth-token": Cypress.env("token"), // Inclure le jeton d'authentification dans l'en-tête "x-auth-token"
		},
	});
});
// GET NOTES
Cypress.Commands.add("getNotes", () => {
	cy.request({
		method: "GET",
		url: "notes",
		headers: {
			"x-auth-token": Cypress.env("token"),
		},
	});
});
// UPDATE NOTE
Cypress.Commands.add("updateNote", (note) => {
	// {
	//     title: "string",
	//     description: "string",
	//     completed: Boolean,
	//     category: ["Home", "Work", "Personal"]
	// }
	cy.request({
		method: "PUT",
		url: `notes/${Cypress.env("noteId")}`,
		body: note,
		headers: {
			"x-auth-token": Cypress.env("token"),
		},
	});
});
// DELETE NOTE
Cypress.Commands.add("deleteNote", () => {
	cy.request({
		method: "DELETE",
		url: `notes/${Cypress.env("noteId")}`,
		headers: {
			"x-auth-token": Cypress.env("token"),
		},
	});
});
