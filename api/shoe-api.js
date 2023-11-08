export default function shoesAPI(shoeQueries){

    async function addShoe(req, res) {
        try {
            // Destructure the relevant properties from req.body
            const { shoename,color, brand, price, size, stock, image_url } = req.body;
            

            // Create an object to represent the shoe
            const shoe = {
                shoename,
                color,
                brand,
                price,
                size,
                stock,
                image_url
            };

            // Insert the shoe into the database
            const insertShoe = await shoeQueries.addShoes(shoe);

            console.log('Inserted shoe:', shoe)

            // Respond with a success message
            res.json({
                status: 'Shoe added successfully',
                insertShoe
            });
        } catch (error) {
            // Handle any errors that occur during the database operation
            res.status(500).json({
                error: 'Error adding shoe',
                details: error.message
            });
        }
    }
    async function showAllShoe(req, res){
        try {
            
            const displayShoes = await shoeQueries.showAllShoes()

            res.json({
                status : "success",
                displayShoes
            })

        } catch (error) {
            // Handle any errors that occur during the database operation
            res.status(500).json({
                error: 'Error showing shoes',
                details: error.message
            });
        }
    }

    async function getShoeByBrand(req, res){
        try {
            const brand_name = req.params.brandname
            const displayShoesByBrand = await shoeQueries.getShoesByBrand(brand_name)

            res.json({
                status : "success displaying shoes by brand",
                displayShoesByBrand
            })

        } catch (error) {
            res.status(500).json({
                error : 'Error showing shoes by brand',
                details : error.message
            })
        }
    }

    async function getShoeBySize(req, res){
        try {
            const shoe_size = req.params.size

            if (isNaN(shoe_size)) {
                res.status(400).json({
                    error: 'Invalid input',
                    details: 'The shoe size must be a valid number.'
                });
                return;
            }

            const displayShoesBySize = await shoeQueries.getShoesBySize((shoe_size))

            res.json({
                status: "success displaying shoe by size",
                displayShoesBySize
                })

        } catch (error) {
            res.status(500).json({
                error : 'Error showing shoes by sizes',
                details : error.message
            })
        }
    }

    async function getShoeByBrandAndSize(req,res){

        try {
            const shoe_Name = req.params.size
            const brand_Name = req.params.brandname
            
            const displayShoesByBrandAndSize = await shoeQueries.getShoesByBrandAndSize(brand_Name, shoe_Name)

            res.json({
                status : 'Success displaying shoes by brand and size',
                displayShoesByBrandAndSize
            })
            
        } catch (error) {
            res.status(500).json({
                error: 'Error displaying shoe by size and brand',
                details : error.message
            })
        }

    }

    async function getShoeByColor(req, res){
        try {
            const shoe_color = req.params.color
            const displayShoesByColor = await shoeQueries.getShoesByColor(shoe_color)

            res.json({
                status : 'success',
                displayShoesByColor
            })
        } catch (error) {
            res.status(500).json({
                error : "Error displaying shoe by Color",
                details : error.message
            })
        }
    }

    return{
        addShoe,
        showAllShoe,
        getShoeByBrand,
        getShoeBySize,
        getShoeByColor,
        getShoeByBrandAndSize
    }
}
