Meteor.publish("expenses", function () {
    return Expenses.find({});
});

Meteor.publish("users", function () {
    return Meteor.users.find({});
});
