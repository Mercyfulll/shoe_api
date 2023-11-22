export default function shoeQueries(db){

    async function addShoes(shoe){
        await db.none(
            `INSERT INTO shoes 
            (shoename, color, brand, price, size, stock, image_url,gender,size_url)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
            [shoe.shoename, shoe.color, shoe.brand, shoe.price, shoe.size, shoe.stock, shoe.image_url,shoe.gender,shoe.size_url]
    )}

    async function showAllShoes(){
        return await db.manyOrNone(`SELECT * FROM shoes`)
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
      return await db.manyOrNone(`SELECT * FROM shoes WHERE color LIKE $1`,[`%${color}%`])
      
    }

    async function getOneShoes(shoename){
        return await db.oneOrNone(`SELECT * FROM shoes WHERE shoename = $1`,[shoename])
    }
    async function getShoeByGender(gender){
        return await db.manyOrNone(`SELECT * FROM shoes WHERE gender = $1`,[gender])
    }

    async function getShoesBySizeBrandColor(brand,size,color){
        return await db.manyOrNone(`SELECT * FROM shoes WHERE brand = $1 AND size = $2 AND color LIKE $3`,[brand,size,`%${color}%`])
    }
    async function getShoeById(id){
        return await db.oneOrNone(`SELECT * FROM shoes WHERE id = $1`,[id])
    }

    async function getStockForShoe(id){
        return await db.oneOrNone(`SELECT stock FROM shoes WHERE id = $1`,[id])
    }
    return{
        addShoes,
        showAllShoes,
        getShoesByBrand,
        getShoesBySize,
        getShoesByBrandAndSize,
        getShoesByColor,
        getOneShoes,
        getShoeByGender,
        getShoesBySizeBrandColor,
        getShoeById,
        getStockForShoe
    }
}