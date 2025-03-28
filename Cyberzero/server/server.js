const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/run-script", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email dan password diperlukan!" });
    }

    console.log(`Menjalankan test.js dengan email: ${email} dan password: ${password}`);

    // Jalankan test.js dengan email & password sebagai argumen
    exec(`node test.js "${email}" "${password}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return res.status(500).json({ message: "Gagal menjalankan script." });
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
        }
        console.log(`Output: ${stdout}`);
        res.json({ message: "Error 404", output: stdout });
    });
});

app.listen(5000, () => console.log("Server berjalan di http://localhost:5000"));
