const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server started at port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
