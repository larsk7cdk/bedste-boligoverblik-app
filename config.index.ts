import { writeFile } from 'fs';

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `export const environment = {
    production: true,
    apiBaseUrl: 'https://bedste-boligoverblik-api.azurewebsites.net/api',
    google: {
        apiKey: '${process.env.GOOGLE_API_KEY}'
    },
};
`;

writeFile(targetPath, envConfigFile, 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
});
