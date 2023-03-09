const express = require("express");
const fs = require("fs");
const { resolve } = require("path");

const app = express();

app.get("/", (req, res) => {
    return res.sendFile(__dirname + '/index.html')
})

// pegar um mp3 longo se possível
app.get("/stream", (req, res) => {
    // Lugar em q está
    const range = req.headers.range;

    // Trazendo o arquivo
    const songPath = resolve(__dirnanme, "musics", "music.mp3");
    const songSize = fs.statSync(songPath).size;

    // Pegando o inicio/fim do arquivo com rejax
    const start = Number(range.replace(/\D/g, ""))

    // Buffer
    const CHUNK_SIZE = 1000;
    const end = Math.min(start + CHUNK_SIZE, songSize -1);

    // Headers
    const headers = {
        "Content-Range": `bytes ${start} - ${end} / ${songSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": end - start + 1,
        "Content-Type": "audio/mpeg"
    }

    // Mandando o header - 206 -> Status parcial
    res.writeHead(206, headers);

    // Ler o arquivo e em pedaços
    const songStream = fs.createReadStream(songPath, {start, end});

    songStream.pipe(res);
})

app.listen(3344);