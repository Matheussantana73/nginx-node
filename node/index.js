const express = require('express');
const { createPeople, initializeDB, selectAllPeoples } = require('./db');

const app = express();
const PORT = 3000;

const generateTemplateHTMLByPeople = (peoples) => {
	let template = '<h1>Full Cycle Rocks!</h1>';

	const li_s = peoples.map((people) => `<li>${people.name}</li>`).join('');
	const ul = `<ul>${li_s}</ul>`;

	template += '</br>';
	template += ul;

	return template;
};

app.get('/', async (_req, res) => {
	await createPeople();

	const peoples = await selectAllPeoples();

	const template = generateTemplateHTMLByPeople(peoples);

	res.send(template);
});

app.listen(PORT, () => {
  initializeDB()
	console.log(`Listen port ${PORT}`);
});
