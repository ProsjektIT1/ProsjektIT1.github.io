const ghpages = require('gh-pages');

ghpages.publish(
	'__sapper__/export',
	{
		branch: 'master',
		repo: prosjektit1.github.io,
		user: {
			name: 'ProsjektIT1',
			email: 'lolgamez92@gmail.com'
		}
	},
	() => {
		console-log('Deploy Complete!')
	}
)