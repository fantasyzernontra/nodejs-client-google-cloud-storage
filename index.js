const { format } = require('util')
const express = require('express')
const Multer = require('multer')
const { Storage } = require('@google-cloud/storage')
const service_account = require('./service_account_config')

require('dotenv').config()

const app = express()
const multer = Multer()
const storage = new Storage({
	projectId: process.env.GCLOUD_PROJECT_ID,
	keyFilename: service_account,
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET)

app.get('/', async (req, res) => res.send('Yo! Wat sup Bro'))

app.post('/upload', multer.single('file'), async (req, res) => {
	if (!req.file) return res.status(400).send('No file uploaded.')

	const blob = bucket.file(req.file.originalname)

	const blobStream = blob.createWriteStream({
		resumable: false,
	})

	blobStream.on('error', (err) => console.log(err.message))

	blobStream.on('finish', async () => {
		await blob.makePublic()
		const publicURL = format(
			`https://storage.googleapis.com/${bucket.name}/${blob.name}`
		)
		res.status(200).send(publicURL)
	})

	blobStream.end(req.file.buffer)
})

app.listen(process.env.PORT || 5000, () =>
	console.log(`Server is listening on PORT ${process.env.PORT || 5000}`)
)
