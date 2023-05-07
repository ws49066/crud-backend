import { PrismaClient } from '@prisma/client'
import Express, { json } from 'express'
const app = Express()

const prisma = new PrismaClient()

const port = 8000

app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }

    next()
})

app.get('/', async(req, res) => {
    res.send('Olá mundo')
})

app.get('/clientes', async (req, res) => {

    try {
        const allClientes = await prisma.clientes.findMany();

        allClientes['status'] = 200

        res.json({ allClientes })
    } catch (error) {
        res.send({ error })
    }
})

app.get('/cliente/:id', async (req, res) => {

    try {
        const client = await prisma.clientes.findMany({
            where: {
                id: req.params.id
            }
        });

        res.json({ client })
    } catch (error) {
        res.send({ error })
    }
})

app.post('/clientes', async (req, res) => {
    await prisma.$connect

    console.log()
    try {

        const response = await prisma.clientes.create({
            data: req.body
        })

        response['status'] = 200

        res.json(response)
    } catch (error) {
        res.send(error)
    }
})

app.delete('/cliente/:id', async (req, res) => {
    try {
        await prisma.clientes.delete({
            where: {
                id: req.params.id
            }
        })
        res.json({'status':200})
    } catch (error) {
        res.send(error.message)
    }
})

app.put('/cliente/:id', async (req, res) => {
    try {
        const cliente = await prisma.clientes.update({
            where: {
                id: req.params.id
            },
            data: req.body
        })
        cliente['status'] = 200

        res.json({ cliente })
    } catch (error) {
        res.send(error.message)
    }
})

app.use((req, res) => {
    res.send('Request not found')
})

app.listen(port, () => {
    console.log(`crud-backend listening on port ${port}`)
})