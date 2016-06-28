const Circle = function() {};
Circle.prototype = {
  area: function() {
    return Math.PI * this.radius * this.radius;
  },
  grow: function() {
    this.radius++;
  },
  shrink: function() {
    this.radius--;
  }
};

const circleFns = {
  area: function() {
    return Math.PI * this.radius * this.radius;
  },
  grow: function() {
    this.radius++;
  },
  shrink: function() {
    this.radius--;
  }
};

const clickableFns = {
  hover: function() {
    console.log('hovering');
  },
  press: function() {
    console.log('button pressed');
  },
  release: function() {
    console.log('button released');
  },
  fire: function() {
    return this.action.fire();
  }

};

const RoundButton = function(radius, label) {
  this.radius = radius;
  this.label = label;
  this.action = {
    fire: function () {
      return 'firing';
    }
  };
};
Object.assign(RoundButton.prototype, circleFns);
Object.assign(RoundButton.prototype, clickableFns);
const roundButton = new RoundButton(3, 'send');

roundButton.grow();
roundButton.grow();
console.log(roundButton.radius);
console.log(roundButton.fire());
