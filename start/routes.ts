/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'



// Route.get('/data2','UsersController.getSelectedEmployeeShift')
// Route.get('/test/8',async()=>{
// return 'working'})
// Route.on('/testing').redirectToPath('https://duckduckgo.com/')
// Route.get('/Post/:id',async({params})=>
// {
    // return`get a single post an id of ${params.id}`}).where('id',/^[0-9]+$/)


    // Route.get('/Post/:id',async({params})=>
// {
    // return`get a single post an id of ${params.id}`}).where('id',Route.matchers.number())


    
    
//     Route.get('/Post/topics/:topic?',async({params})=>
// {
//     return`get a single post an id of ${params.topic}`}).where('topic',Route.matchers.slug())


    Route.get('/Post/:id',async({params})=>
{
    return`get a single post an id of ${params.id}`}).where('id',Route.matchers.number())

