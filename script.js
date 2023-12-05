class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  static ageComparison(x, y) {
    if (x.age > y.age) {
      return x.firstName + " is older than " + y.firstName;
    } else if (x.age < y.age) {
      return y.firstName + " is older than " + x.firstName;
    } else {
      return x.firstName + " and " + y.firstName + " are the same age";
    }
  }
}

const user1 = new User("Mark", "Bolo", 32, "Pavia");
const user2 = new User("John", "Colo", 32, "Parma");

console.log(User.ageComparison(user1, user2));

// PETS EXCERCISE

// bisogna compilare il form due volte, dopo di che bisogna cliccare compare per il confronto

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  static sameOwner(a, b) {
    if (capitalizeFirstLetter(a.ownerName) === capitalizeFirstLetter(b.ownerName)) {
      return true;
    } else {
      return false;
    }
  }
}

const petArray = [];

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

document.querySelector(".btn-primary").addEventListener("click", (event) => {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const pet1 = new Pet(petName, ownerName, species, breed);

  petArray.push(pet1);

  console.log(petArray[0], petArray[1]);
  document.querySelector("form").reset();
});

document.querySelector(".btn-success").addEventListener("click", (event) => {
  event.preventDefault();

  console.log(Pet.sameOwner(petArray[0], petArray[1]));
});
