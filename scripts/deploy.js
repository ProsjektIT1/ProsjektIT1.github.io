const ghpages = require('gh-pages');

ghpages.publish(
	'__sapper__/export',
	{
		branch: 'master',
		repo: "https://github.com/ProsjektIT1/ProsjektIT1.github.io.git",
		user: {
			name: 'ProsjektIT1',
			email: 'lolgamez92@gmail.com'
		}
	},
	() => {
		console.log('Deploy Complete!')
	}
)