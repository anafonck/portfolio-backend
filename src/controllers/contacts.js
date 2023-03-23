const knex = require('../connection');

const saveContact = async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !phone || !email || !message) {
        return res.status(400).json({
            status: 400,
            message: "Por favor, informe todos os dados para que possa entrar em contato com você."
        });
    }

    try {
        const addMessage = await knex('contacts').insert({ name, email, phone, message }).debug();
        return res.status(201).json({
            status: 201,
            message: `Obrigada por deixar sua mensagem, ${name}, entrarei em contato em breve.`
        });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports = {
    saveContact
}