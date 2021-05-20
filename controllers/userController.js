const User = require("../models/User");

exports.crearUser = async(req, res) => {
    //     console.log(req.body);
    try {

        //Creamos usuario
        usuario = new User(req.body);

        await usuario.save();
        res.send(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerUsers = async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarUser = async(req, res) => {

    try {

        const { id, cedula, name, lastName, email, password } = req.body;
        let user = await User.findById(req.params.id);

        if (!user) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }
        user.id = id;
        user.cedula = cedula;
        user.name = name;
        user.lastName = lastName;
        user.email = email;
        user.password = password;

        user = await User.findOneAndUpdate({ _id: req.params.id }, user, { new: true });
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerUser = async(req, res) => {

    try {
        let user = await User.findById(req.params.id);

        if (!user) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarUser = async(req, res) => {

    try {
        let user = await User.findById(req.params.id);

        if (!user) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }

        await User.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Usurio eliminado con exito' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}