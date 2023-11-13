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
    return{
        registerTheUser,
    }
}