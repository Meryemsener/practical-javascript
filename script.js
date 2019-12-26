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
//ver-2 Functions
//......................................
var todos= ['item 1 updated', 'item 2', 'item 3','items 4','item 5']//brace=suslu parantez
todos.splice(0,1);//delete a todo
//new todos is['item 2', 'item 3','items 4','item 5']
todos.splice(2,1);
//new todos is ['item 2', 'item 3','item 5']


/*ver-2 Functions*/
sayHiTo('Meryem');//person= meryem
function sayHiTo(Person){

  console.log('hi', person);
  //hi Meryem
}
    
//............
var todos=['item 1', 'item 2', 'item 3']//display todos,function olusturmadan once ihtiyac olunan dizin
 
function displayTodos(){                //(fonksiyonun adi)
    console.log('My todos:' , todos);   
}

displayTodos()

//My todos :['item 1', 'item 2', 'item 3'] 
/*fonksiyon yazarken eklenen suslu parantezin arasini acmak icin shift+enter a basman gerekiyor. yoksa fonksiyon calismaz*/
//...............................

function addTodo(todo){       //add todo
    todos.push(todo);
    displayTodos();
}
addTodo();// addTodo da eklemek istedigin seyi yazabilirsin,
todos;//['item 1', 'item 2', 'item 3', 'todo']

displayTodos()    //parantez bos kalmak zorunda
///My todos :['item 1', 'item 2', 'item 3', 'todo']
//................

function changeTodo (position, newValue){ //
    todos[position] = newValue;//degistirme yaptigimizda koseli parantaz aciyoruz, vermek istedigimiz yeni deger
    }
             /*yukarida demek istedigimiz, fonksiyonda degisiklik yapacagiz.Pozisyin ve deger ifadelerini veriyoruz.Pozisyon kismi 			kacinci       siradaki
             todo yu degistirecegimizi beliliyor, newValue da todoya verecegimiz yeni degeri belirliyor. Bir altta yaptigimiz da burda 			yazdigimiz kodu live haline getirmek. */
    
    changeTodo(1, 'changed');
    displayTodos();
    //My todos: ["item 1", "changed", "item 3", "new todo"]
    

function changeTodo (position, newValue){
    todos[position] = newValue;
    displayTodos(); // fonksiyonun icinde displayTodos(); eklersek, yukaridaki ornekteki gibi extra changeTodo yazmana gerek olmayacak. KOlay yol
    }
    changeTodo(1, 'changed again');
    //My todos: ['item 1', 'changed again', 'item3', 'new todo']
    //...........................

    function deleteTodo(position){ //parametre=duragan gibi gorunen ancak alacagi her yeni deger icin islevi degistirilen ()=paramatre
        todos.splice(position,1);  //splice=baglanti yeri
        displayTodos();
    }
    //My todos: ['item 1', 'change again', 'item3', 'new todo']
    deleteTodo(2);
    //My todos: ['item 1', 'change again', 'new todo']
    

   //....
     var myName='Meryem';//fonksiyon yazarken once var:yani degisken atiyoruz
     function sayName(){
        console.log(myName);
     }
        sayName;//Meryem

     function sayName (){
        var school = 'HAckYourFuture';
        console.log(myName);
        }
        console.log(secret);   /*bu console.log'un calismama nedeni consolun disaridan cagirmasi. console.log
				iceriden disari ile baglanti kurabilirsin ama disaridan iceri ile baglanti kuramazsin*/
        //Referance Error, school tanimlanmadigi icin hata verir

