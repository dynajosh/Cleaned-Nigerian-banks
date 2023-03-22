import axios from 'axios';

(function getDataFromAPI(){
    axios.get('https://api.paystack.co/bank', {
        headers: {
            "Authorization": `Bearer ${process.env.YOUR_PAYSTACK_SECRET_KEY}`
        },
        params: {
            country: "Nigeria"
        }
       })
       .then((response)=>{
        res.status(200).json({
            banks: response.data
        })
       })
       .catch((err)=>{
        console.log(err)
        res.status(400).json({
            error: err
        })
       })
    
})()
