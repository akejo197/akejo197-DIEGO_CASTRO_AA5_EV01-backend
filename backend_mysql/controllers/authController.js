import db from "../config/db.js";

export const login = async (req, res) => {
    const { correo, password } = req.body;
    // Validar que los campos no estén vacíos

    if (!correo || !password) {
        return res.status(400).json({message: "Todos los campos son obligatorios"});
    }

    try {
        const [rows] = await db.query("select * from users where correo = ? and password = ?", [correo, password]);

        if (rows.length === 0) {
            return res.status(401).json({message: "Correo o contraseña incorrectos"});
        }

        res.status(200).json({message: "Login exitoso", user: rows[0]});

    } catch (error) {
        console.error("error en el login", error);
        res.status(500).json({message: "Error en el servidor"});
    }
}