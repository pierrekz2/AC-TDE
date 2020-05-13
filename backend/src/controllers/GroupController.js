const Group = require('../models/Group');
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const { names } = req.query;

        const groups = await Group.find({ name: names });

        return res.json(groups);
    },

    async store(req, res) {
        const { name, minumumValue, maximumValue, drawDate } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: "User does not exists" })
        }

        const group = await Group.create({
            name, minumumValue, maximumValue, drawDate,
            user: user_id
        })

        return res.json(group)
    },

    async destroy(req, res) {
        const { group_id } = req.params;

        const group = await Group.deleteOne({ group_id: req.params.id }, (err) => {
            if (err) return res.status(400).json({
                error: true,
                message: "Error: failure to erase data!"
            });

            //Retornar mensagem de sucesso quando excluir o registro com sucesso no banco de dados
            return res.json({
                error: false,
                message: "Data successfully deleted!"
            });
        });

        return res.json(group);

    },

    async update(req, res) {

        const { group_id } = req.params;

        const group = await Group.updateOne({ group_id: req.params.id }, (err) => {
            if (err) return res.status(400).json({
                error: true,
                message: "Group edit failed!"
            });

            //Retornar mensagem de sucesso quando excluir o registro com sucesso no banco de dados
            return res.json({
                error: false,
                message: "Success!"
            });
        });

        return res.json(group);
    },

    async AddToGroup(req, res) {
        const { _id, participants } = req.body
        //const groupAux = await Group.updateOne({ _id : _id  }, { $push : { users :  participants} });
        //const groupAux = await Group.updateOne({ _id : _id  }, { $push : { users :  participants} }, { upsert: true });
        const groupAux = await Group.findOneAndUpdate({ _id: _id }, { $push: { users: participants } }, { upsert: true });
        return res.json(groupAux);
    },

    async Draw(req, res) {
        let participante = [{ usuario: "a", amigo: "" },
        { usuario: " b", amigo: "" },
        { usuario: " c", amigo: "" }];

        let sorteados = [];
        //document.write(participante[0].usuario);
        let max = participante.length;
        document.write(max);
        let i = 0;
        while (i < max) {
            let auxSorteio = Math.floor(Math.random() * max);
            document.write(auxSorteio);
            if ((participante[auxSorteio].usuario != participante[i].usuario) && (
                sorteados.find(element => element.usuario == participante[auxSorteio].usuario) == undefined)) {
                participante[i].amigo = participante[auxSorteio].usuario;
                sorteados.push(participante[i].amigo);
                i++;
            }
        }
        for (i = 0; i < max; i++) {
            document.write("usuario :" + participante[i].usuario + " saiu " + participante[i].amigo + "<br>");
        }

    }

};