import Person from "./person";
import './modules/moduleA';
import './assets/css/style.css';
import './assets/scss/index.scss'

const attendant = new Person();
console.log(attendant.sayHi())