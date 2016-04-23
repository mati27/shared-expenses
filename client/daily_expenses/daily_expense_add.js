var expenseCollection = new ExpenseCollection();

Template.daily_expense_add.helpers({
    users: function () {
        return Meteor.users.find({});
    }
});

Template.daily_expense_add.events({
    'submit .new-expense': function(event) {
        event.preventDefault();

        var description = event.target.description.value;
        var amount = event.target.amount.value;
        var paidBy = event.target.paidBy.value;

        expenseCollection.add(new Expense({description: description, amount: amount, paidBy: paidBy, settled: false}));

        // Clear form
        event.target.description.value = "";
        event.target.amount.value = "";
        event.target.paidBy.value = "";
    }
});
