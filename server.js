const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello word');    
});

app.get('/novarota', (req, res) => {
    res.send('Nova rota criada');    
});
app.get('/consulta-cep/86191-030', async (req, res) => {
    const cep = req.params.cep; // Obtendo o CEP da URL
    
    try {
        // Fazendo a requisição para a API do ViaCEP
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        res.json(response.data); // Retorna os dados da resposta
    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        res.status(500).send('Erro ao consultar o CEP');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});