import { v4 as uuidv4 } from 'uuid';

// Generate a random UUID
// const uniqueId = uuidv4();
// const shortid = uniqueId.substr(0, 8)

export default function ordersAPI(ordersQueries){

    const uniqueId = uuidv4().substring(0, 8);

    async function createCart(req,res){
        console.log('Received a request to create a cart')
        try {
            const name = req.query.username 
            const orderCode = uniqueId
            const cartCode = await ordersQueries.createCart(orderCode,name)

            res.json({
                status: 'success',
                orderCode 
            })

        } catch (error) {
            res.status(500).json({
                error:'error',
                details:error.message
            })
        }
    }
    async function addToCArt(req,res){
        try {
            const nameOfBuyer = req.body.username
            const id = req.params.shoeid

            const inCart = await ordersQueries.addShoetoCart(nameOfBuyer,id)
            
            res.json({
                status:'success',
                inCart
            })
        } catch (error) {
            res.status(500).json({
                error:'error',
                details:error.message
            })
        }
    }

    async function getCart(req,res){
        try {
            const theCArt = await ordersQueries.getCart()

            res.json({
                theCArt
            })
        } catch (error) {
            res.status(500).json({
                error:'error',
                details:error.message
            })
        }
    }

    return{
        createCart,
        addToCArt,
        getCart
    }
}