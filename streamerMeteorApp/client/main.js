import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
streamer = new Meteor.Streamer('chat')

streamer.on('message', function(message) {
  console.log('user: ' + message);
});

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  Meteor.call("sayHello", "jdslfj", function(error, result){
    if(error){
      console.log("error", error);
    }
    if(result){
      console.log(result);

    }
  });
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
