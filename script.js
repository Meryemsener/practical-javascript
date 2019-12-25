/*ver-1 arrays*/
var todos =['item 1', 'item 2', 'item 3']//store todo
todos;

console.log(todos);
//['item 1', 'item 2', 'item 3']
//............................................


var todos =['item 1', 'item 2', 'item 3']
todos.push('item 4'); //display todo
console.log(todos);
//['item 1', 'item 2', 'item 3','items 4']

//............................
var todos =['item 1', 'item 2', 'item 3','items 4']
 todos.push('item 5');//add the new todo
 console.log(todos);
//['item 1', 'item 2', 'item 3','items 4','item 5']

todos[0];
//'item 1'

todos[1];
//'item 2'

tosoa[2];
//'item 3'
todos[5];
//undefinde
//........................................
var todos =['item 1', 'item 2', 'item 3','items 4']
todos[0] ='item 1 updated'//change a todo
todos;
// new todos is ['item 1 updated', 'item 2', 'item 3','items 4','item 5']

//......................................
var todos= ['item 1 updated', 'item 2', 'item 3','items 4','item 5']
todos.splice(0,1);//delete a todo 0= silmeye hangisinden baslayacak, 1= 0 dahil kac tane silecek
//new todos is['item 2', 'item 3','items 4','item 5']
todos.splice(2,1);
//new todos is ['item 2', 'item 3','item 5']

