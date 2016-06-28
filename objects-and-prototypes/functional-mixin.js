function interactions() {
  /* define functionalities */
  this.click = function() {
    return 'button click';
  };
  this.grow = function() {
    // `this.size` refers to the instance property
    this.size += 1;
  };
  this.fire = function() {
    // `this.action` refers to the instance property
    return this.action.fire();
  };
  this.getLabel = function() {
    // `this.label` refers to the instance property
    return this.label;
  }
}

function Button(size, label, fire) {
  if (!(this instanceof Button)) {
    return new Button(size, label, fire);
  }
  this.size = size;
  this.label = label;
  this.action = {
    fire
  };
}

/* assign the functions to the prototype */
interactions.call(Button.prototype);

/* create instance */
const button1 = Button(1, 'hello', () => {
  return 'firing the event'
});

console.log(button1.fire());
button1.grow();
button1.grow();
console.log(button1.size);
console.log(button1.getLabel());
