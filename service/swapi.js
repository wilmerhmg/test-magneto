import https from 'https';
import { maxTimeout } from '../config/initial';

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
      reject(error);
    });

    //prevents some cloudflare checks
    req.setHeader('User-Agent', 'PostmanRuntime/7.23.0');

    req.end();
  });
};

export const getMovies = () => {
  return httpsClient({
    hostname: 'swapi.co',
    port: 443,
    timeout: maxTimeout,
    path: '/api/films/',
    method: 'GET'
  });
};

export const getCharacter = (UrlCharacter) => {
  return httpsClient({
    hostname: 'swapi.co',
    port: 443,
    timeout: maxTimeout,
    path: UrlCharacter,
    method: 'GET'
  });
};

export const getPlanet = (UrlPlanet) => {
  return httpsClient({
    hostname: 'swapi.co',
    port: 443,
    timeout: maxTimeout,
    path: UrlPlanet,
    method: 'GET'
  });
};

export const getStarship = (UrlStarship) => {
  return httpsClient({
    hostname: 'swapi.co',
    port: 443,
    timeout: maxTimeout,
    path: UrlStarship,
    method: 'GET'
  });
};

export const getSpecie = (UrlSpecie) => {
  return httpsClient({
    hostname: 'swapi.co',
    port: 443,
    timeout: maxTimeout,
    path: UrlSpecie,
    method: 'GET'
  });
};
