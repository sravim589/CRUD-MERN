const express = require('express');
const router = new express.Router();
const app = express();
const STUDENT = require("../models/students");

// // TO POST API IN POSTMAN BY FORM COMPONENT
router.post('/Myapp', async (req, res) => {
    //app.get('/students/:id', async (req, res) => {
    try {
        console.log("gud afternoon");
        console.log(req.body);

        //to insert data or save it
        const user = new STUDENT(req.body);

        const createuser=await user.save()
        res.status(201).send(user);

        //const id=req.params.id;
        // const Data = await STUDENT.findById({_id:id}//{_id}//{key:value});
        //    const Data = await STUDENT.find();
        // res.send(Data);
        // res.send("good afternoon");
        // res.status(200);
    }
    catch (e) {
        res.status(500).send(e);
    }
})

// TO GET API IN POSTMAN 
router.get('/Myapp', async (req, res) => {
    //app.get('/students/:id', async (req, res) => {
    try {
        console.log("gud morning");
        const Data = await STUDENT.find();
        res.send(Data);
        //const id=req.params.id;
        // const Data = await STUDENT.findById({_id:id}//{_id}//{key:value});
        // const Data = await STUDENT.find();
        // res.send(Data);
        // res.send("good morning");
        res.status(200);
    }
    catch (e) {
        res.status(500).send(e);
    }
})

//fetching only one data from the 
//api on the basis of name...
router.get('/Myapp/:nm', async (req, res) => {
    try {
        const name = req.params.nm;
        console.log(name);

        // const Data = await STUDENT.find({ name: name });//{key:value});
        const Data = await STUDENT.find(
            { id: name });//{key:value});
        res.status(200).send(Data);
    }
    catch (e) {
        res.status(500).send(e);
    }
})

//update data.....

//patch
router.put('/Myapp/:name/:pwd', async (req, res) => {
    try {
        const name = req.params.name;
        const pwd = req.params.pwd;
        console.log(name);

        // if (!req.params.rlno) {
        //    return res.status(400).send().send();
        // }
        //else {
        //findByIdAndUpdate(_id,req.body,{new:true})//updated data
        const Data = await STUDENT.updateOne({ username: name }, { $set: { userpwd: pwd } });//{key:value});
        res.send(Data);
        //}

    }
    catch (e) {
        res.status(500).send(e);
    }
})



//..............
//patch
router.put('/Myapp/:id', async (req, res, next) => {
    try {
        console.log(req.params.id);
        const username = req.body.username;
        const userpass = req.body.userpass;
        console.log(username + "" + userpass);

        // if (!req.params.rlno) {
        //    return res.status(400).send().send();
        // }
        //else {
        //findByIdAndUpdate(_id,req.body,{new:true})//updated data
        const Data = await STUDENT.updateOne({ username: username }, { $set: { userpass: userpass } });//{key:value});
        res.send(Data);
        //}

    }
    catch (e) {
        res.status(500).send(e);
    }
})

//..............
//delete data....
//delete data....
router.delete('/Myapp/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);

        // if (!req.params.rlno) {
        //    return res.status(400).send().send();
        // }
        //else {
        //STUDENT.findByIdAndDelete(req.params.id)if id as parameter

        const Data = await STUDENT.deleteOne({ id: id });//{key:value});
        res.send(Data);
        //}

    }
    catch (e) {
        res.status(500).send(e);
    }
})





module.exports = router;