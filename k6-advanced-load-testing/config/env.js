
module.exports = {
    development: {
        baseUrl: "https://test-api.k6.io",
        timeout: 5000, // Request timeout in ms
    },
    production: {
        baseUrl: "https://api.production.com",
        timeout: 3000, // Faster timeout for production
    },
};
