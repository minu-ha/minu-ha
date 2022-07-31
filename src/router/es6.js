function f(a) {
  document.getElementById('hello').innerHTML = a;
}

var name = ['kim', 'park'];
name[2];
var names = { name: 'kim', age: 20 };
names.name;

if (1 === 1 || 2 === 2) {
  console.log('hello');
} else {
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

[1, 2, 3, 4].forEach(function (value, index, array) {});

var obj = {
  data: 'kim',
  func: function () {
    console.log('hello');
  },
};

obj.data;
obj.func();

function f1() {
  this.f1 = 'kim';
}

const es6 = (a) => {
  return a + 10;
};

es6(5)[(1, 2, 3, 4, 5)].forEach((a) => console.log(a));

f();

var user = {
  name: 'son',
  sayHi: () => {
    console.log('hello im son');
  },
};

user.sayHi();

const f2 = (a, b = 10) => {
  console.log(a + b);
};

var array = [2, 3, 4, 5];

var roh = [1, 23, 4];

var a = array[0];

import React from 'react';

function Es6(props) {
  return <div></div>;
}

export default Es6;
