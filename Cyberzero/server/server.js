const express = require("express");
const path = require("path");
const cors = require("cors");
app.use(cors());

const app = express();
const port = process.env.PORT || 8080;

// Serve static files from the parent directory
app.use(express.static(path.join(__dirname, "..")));

// Serve index.html when accessing "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});

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