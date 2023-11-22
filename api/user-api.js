export default function userAPI(usersQuerries){

    async function registerTheUser(req,res){
        try {
            const {username,email,user_password} = req.body
            const user = {
                username,
                email,
                user_password
                
            }

            const registeredUser = await usersQuerries.registerUser(user)
           res.json({
                status: 'success',
                registeredUser
           })

        } catch (error) {
            res.status(500).json({
                error : 'error',
                details : error.message
            })
        }
    }
    async function checkIfUserAlreadyExist(req,res){
        try {
           const username = req.body.username
           const password = req.body.user_password


           const existingUser = await usersQuerries.checkiIfUserExist(username,password)
           existingUser
           res.json({
                status : 'success',
                existingUser

           })
        } catch (error) {
            res.status(500).json({
                error : 'error',
                details : error.message
            })
        }
    }

    async function getHashedPassword(req,res){
        try {
            const name = req.params.username
            const getHashedPassword = await usersQuerries.getHashedPassword(name)

            res.json({
                getHashedPassword
            })
        } catch (error) {
            res.status(500).json({
                error : 'error',
                details : error.message
            })
        }
    }

    return{
        registerTheUser,
        checkIfUserAlreadyExist,
        getHashedPassword
    }

}