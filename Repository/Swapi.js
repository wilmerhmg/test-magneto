import https from 'https';

const httpsClient = (options) => {
	return new Promise((resolve, reject) => {
		const req = https.request(options, res => {
			let finalData = '';

			res.on('data', (rawData) => {
				finalData += rawData;
			});

			res.on('end', () => {
				resolve(JSON.parse(finalData));
			});

		});

		req.on('error', (error) => {
			reject(error)
		});

		req.end();
	});
};

export const getFilms = () => {
	return httpsClient({
		hostname: 'swapi.co',
		port: 443,
		path: '/api/films/',
		method: 'GET'
	});
};

export const getCharacter = (UrlCharacter) => {
	return httpsClient({
		hostname: 'swapi.co',
		port: 443,
		path: UrlCharacter,
		method: 'GET'
	});
};

export const getPlanet = (UrlPlanet) => {
	return httpsClient({
		hostname: 'swapi.co',
		port: 443,
		path: UrlPlanet,
		method: 'GET'
	});
};

export const getStarship = (UrlStarship) => {
	return httpsClient({
		hostname: 'swapi.co',
		port: 443,
		path: UrlStarship,
		method: 'GET'
	});
};
