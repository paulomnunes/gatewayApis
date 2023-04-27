const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const endpoints = [
    { path: '/microsservicoa', target: 'http://localhost:3000', description: 'Gerencia os dados sensíveis.' },
    { path: '/microsservicob', target: 'http://localhost:4000', description: 'Gerencia os dados de score.' },
    { path: '/microsservicoc', target: 'http://localhost:5000', description: 'Gerencia os últimos eventos.' },
];

app.get('/', (req, res) => {
    const availableEndpoints = endpoints.map((endpoint) => endpoint.path);

    const message = 'Seja bem-vindo ao gatewayApis! Explore os endpoints de cada microsserviço para descobrir as rotas disponíveis e aproveitar todas as funcionalidades.';

    const endpointsWithDescriptions = endpoints.reduce((result, endpoint) => {
        result[endpoint.path] = endpoint.description;
        return result;
    }, {});

    const response = {
        message,
        endpoints: endpointsWithDescriptions,
    };

    res.json(response);
});

endpoints.forEach(({ path, target }) => {
    app.use(
        path,
        createProxyMiddleware({
            target,
            changeOrigin: true,
            pathRewrite: {
                ['^' + path]: '',
            },
        })
    );
});

app.use((req, res) => {
    res.status(404).json({ message: 'Rota inválida.' });
});

const PORT = 6000;
app.listen(PORT, () => {
    console.log(`API Gateway rodando na porta ${PORT}`);
});
