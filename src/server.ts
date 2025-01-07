import { app } from './app';

const env: string = app.get('env');
const port = process.env.EXPRESS_PORT ?? 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on http://localhost:${port} in ${env}`);
}).on('error', (error: Error) => {
    // eslint-disable-next-line no-console
    console.log('Error in server starting up: ' + error.message);
    // throw new Error(error.message);
});
