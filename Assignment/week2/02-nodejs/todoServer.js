/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
  const express = require('express');
  const bodyParser = require('body-parser');
  const fs= require("fs");
const { log } = require('console');

  const app = express();
  
  app.use(bodyParser.json());

  const filePath = "./todos.json"
  app.get('/todos',(req,res)=>{
    fs.readFile(filePath,"utf-8", (err,data)=>{
      if(err)
        return res.status(500).json({error:"failed to retrieve the file"})
      res.status(200).json(JSON.parse(data))
    })
  })
  
  app.get("/todos/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    fs.readFile('todos.json','utf-8',(err,data)=>{
      data = JSON.parse(data)
      if(err)
        return res.status(500).json({error:"failed to retrieve the file"})
      else if(id<0 || id>=data.length)
        return res.status(404).json("not found")
      res.status(200).json(data[id])
    })
  })

  app.use(bodyParser.json())

  app.post('/todos',(req,res)=>{
    const reqData = req.body
    let id = NaN
    fs.readFile('todos.json','utf-8',(err,data)=>{
      const finalData = (JSON.parse(data))
      id = finalData.length
      reqData["id"]= id
      finalData.push(reqData)

      fs.writeFile('./todos.json', JSON.stringify(finalData, null, 2),(err)=>{
        if (err) {
          return res.status(500).json({ error: "Failed to write to file" });
        }
          console.log("Successfully written");
        res.status(201).json({"id":id})
      })
    })
  })

  app.put('/todos/:id',(req,res)=>{
    const id = req.params.id
    const reqData = req.body
    fs.readFile('todos.json','utf-8',(err,data)=>{
      const finalData = (JSON.parse(data))
      if(id > -1 && id < finalData.length){
        finalData[id]["completed"] = reqData["completed"]
        delete finalData[id].description
        fs.writeFile('./todos.json', JSON.stringify(finalData, null, 2),(err)=>{
          if (err) {
            return res.status(500).json({ error: "Failed to update the file" });
          }
            
          res.status(200).send("found and updated")
        })
      }
      else{
        res.status(404).send("Not found")
      }
    })
  })

  app.delete('/todos/:id',(req,res)=>{
    const id = req.params.id
    fs.readFile('todos.json','utf-8',(err,data)=>{
      const finalData = (JSON.parse(data))
      if(id > -1 && id < finalData.length){
        finalData.splice(id,1)
        fs.writeFile('./todos.json', JSON.stringify(finalData, null, 2),(err)=>{
          if (err) {
            return res.status(500).json({ error: "Failed to update the file" });
          }
          res.status(200).send("found and updated")
        })
      }
      else{
        res.status(404).send("Not found")
      }
    })
  })

  app.use((req, res) => {
    res.status(404).send("Route not found");
  });

  // app.listen(3001)
  
  module.exports = app;