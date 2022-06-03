const ghpages = require('gh-pages');

ghpages.publish(
	'__sapper__/export',
	{
		branch: 'main',
		repo: ProsjektIT1.github.io,
		user: {
			name: 'ProsjektIT1',
			email: 'lolgamez92@gmail.com'
		}
	},
	() => {
		console-log('Deploy Complete!')
	}
)