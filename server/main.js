import { Meteor } from 'meteor/meteor';



Meteor.startup(() => {
  // code to run on server at startup
 Meteor.methods({
  'submitBooks':function(books){
     Books.insert(books)
     
  }
 })
});
