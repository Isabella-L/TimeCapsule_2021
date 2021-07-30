import PrivateMessage from '../models/capsuleMessage.js';

//refer to http://www.restapitutorial.com/httpstatuscodes.html 
//for detail regarding the http codes

export const getCapsules = async(req, res) => {
    //if every thing is successfull, goes to try
    //const capsules = new PrivateMessage({title:"Apple", message: "test" });
    try {
        //await capsules.save();//res.send("inserted data");

        const privatecapsules = await PrivateMessage.find(); //asynchronous
        //PrivateMessage.find({ $where: {message:"test"} });
        
        res.status(200).json(privatecapsules);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const addCapsules = async(req, res) => {
    const capsule = req.body.capsuleData;

    //pass value we are receiving from body
    const newCapsule = new PrivateMessage(capsule); 

    try {
        await newCapsule.save(); //async
        //res.send("new capsule created!");
        res.status(201).json(newCapsule); //http code 201: successful creation
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

// export const createCapsule = async(req, res) => {
//     const capsule = req.body;

//     //pass value we are receiving from body
//     const newCapsule = new PrivateMessage(capsule); 

//     try {
//         await newCapsule.save(); //async

//         res.status(201).json(newCapsule); //http code 201: successful creation
//     } catch (error) {
//         res.status(409).json({message: error.message})
//     }
// }