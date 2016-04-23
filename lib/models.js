Expense = function(expenseAsJson) {
    this._id = expenseAsJson._id;
    this.description = expenseAsJson.description;
    this.amount = expenseAsJson.amount;
    this.settled = expenseAsJson.settled;

    this.userWhoPaid = Meteor.users.findOne({username: expenseAsJson.paidBy});
};

Expense.prototype.paidBy = function() {
    return this.userWhoPaid.profile.name;
};

Expense.prototype.id = function() {
    return this._id;
};

ExpenseCollection = function() {
};

ExpenseCollection.prototype = {
    findAll: function() {
        var expensesAsJson = Expenses.find({settled: {$ne: true}}, {sort: {createdAt: -1}});
        return expensesAsJson.map(function(expenseAsJson) { return new Expense(expenseAsJson); });
    },
    settleMultipleExpenses: function(expensesIds) {
        Meteor.call('settleExpenses', expensesIds);
    }
};
