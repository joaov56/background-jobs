import Queue from '../lib/Queue'
import Mail from '../lib/Mail'

export default{
    async store(req,res){
        const {name, email, password}= req.body;

        const user ={
            name,
            email,
            password
        }
        await Queue.add('RegistrationMail', {user})
        await Queue.add('UserReport', {user})
        //Adding job to the queue
        return res.json(user)
    }
}