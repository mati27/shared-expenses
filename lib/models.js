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
