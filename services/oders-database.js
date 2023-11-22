export default function ordersQueries(db){

    async function createCart(order_code,username){
        await db.none(`INSERT INTO ordercart (order_code,cart_status,username) VALUES ($1,'open',$2)`,[order_code,username])
    }

    async function addShoetoCart(username,shoeId){
        await db.none(`INSERT INTO orders (order_cart_id,qty,username, shoes_id) 
        VALUES ((SELECT id FROM orders WHERE username = $1),1,$1,$2)`,[username, shoeId]);
    }

    async function getCart(){
        return await db.manyOrNone(`SELECT * FROM ordercart`)
    }
    return{
        createCart,
        addShoetoCart,
        getCart
    }
}