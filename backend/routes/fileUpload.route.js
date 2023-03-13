import express from "express"
import mongoose from "mongoose"
import grid from 'gridfs-stream'


const fileRoute = express.Router()

var gfs, gridfsBucket;
const url = "http://localhost:7500"

const conn = mongoose.connection;

conn.once('open', function () {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });

    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');

    fileRoute.post("/", (req, res) => {
        if (!req.file) {
            res.status("404").send({msg: "File not Found"})
        } else {
            const imageUrl = `${url}/fileupload/${req.file.filename}`
            res.status(200).send(imageUrl)
        }
    })

    fileRoute.get("/:filename", async (req, res) => {
        try {
            const file = await gfs.files.findOne({filename: req.params.filename});
            const readStream = gridfsBucket.openDownloadStream(file._id);
            readStream.pipe(res);
        } catch (err) {
            res.status(500).send({msg: err.message});
        }
    })
})

export {fileRoute}
