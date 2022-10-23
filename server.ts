import app from './src/app';
import logger from './src/config/loggerConfig';

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

server.on('error', (err) => {
    console.log('Server error:', err);
});