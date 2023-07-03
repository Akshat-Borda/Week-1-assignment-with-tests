/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor(){
     this.list=[];
  }
  add(todo){
    this.list.push(todo);
    // return this.list;
  }
  remove(i){
    this.list.splice(i,1);
  }
  update(index, updatedTodo){
    if(this.list[index]){
      this.list[index]=updatedTodo;
    }else{}
    // return this.list;
  }
  getAll(){
    return this.list;
  }
  get(ind){
    if(this.list[ind]){
      return this.list[ind];
    }else{
      return null;
    }
    
  }
  clear(){
    this.list.length=0;
  }
}

module.exports = Todo;
var abc= new Todo();
// console.log(abc.add("hello"));
// console.log(abc.add("hello"));
// console.log(abc.add("hello"));
// console.log(abc.add("hello"));
abc.add("hello");
abc.add("hello");
abc.add("hello");
console.log(abc.update(4,'heyy'));