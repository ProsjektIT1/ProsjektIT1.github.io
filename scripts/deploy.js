const ghpages = require('gh-pages');

ghpages.publish(
	'__sapper__/export',
	{
<<<<<<< Updated upstream
		branch: 'balls',
		repo: "https://github.com/ProsjektIT1/ProsjektIT1.github.io.git",
=======
		branch: 'master',
		repo: "https://github.com/prosjektit1/prosjektit1.github.io.git",
>>>>>>> Stashed changes
		user: {
			name: 'ProsjektIT1',
			email: 'lolgamez92@gmail.com'
		}
	},
	() => {
		console.log('Deploy Complete!')
	}
)