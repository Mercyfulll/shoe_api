export default function shoeQueries(db){

    async function addShoes(shoe){
        await db.none(
            `INSERT INTO shoes (shoename, color, brand, price, size, stock, image_url)
            VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [shoe.shoename, shoe.color, shoe.brand, shoe.price, shoe.size, shoe.stock, shoe.image_url]
    )}

    async function showAllShoes(){
        return await db.manyOrNone(`SELECT DISTINCT * FROM shoes`)
    }

    async function getShoesByBrand(brandname){
        return await db.manyOrNone(`SELECT * FROM shoes WHERE brand = $1`,[brandname])
    }

    async function getShoesBySize(size){
        return await db.manyOrNone('SELECT * FROM shoes WHERE size = $1',[size])
    }

    async function getShoesByBrandAndSize(brandname, size){
        return await db.manyOrNone(`SELECT * FROM shoes WHERE brand = $1 AND size = $2`,[brandname,size])
    }

    async function getShoesByColor(color){
        return await db.manyOrNone(` SELECT * FROM shoes WHERE color LIKE $1`,['%${color}%'])
    }

    return{
        addShoes,
        showAllShoes,
        getShoesByBrand,
        getShoesBySize,
        getShoesByBrandAndSize,
        getShoesByColor
    }
}