// Exercise: LEVEL 1

// Question 1
class Animal {
  constructor (name, age, color, legs){
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  get makeSound(){
    return "Make some noise"
  }
}

// Question 2
class Dog extends Animal {

}

class Cat extends Animal {

}

// Exercise: LEVEL 2
class Dog extends Animal {
  constructor (name, age, color, legs){
    super(name, age, color, legs)
  }
  get makeSound(){
    return 'dont make a noise'
  }
}

// Exercise: LEVEL 3
class Statistics {
  
}