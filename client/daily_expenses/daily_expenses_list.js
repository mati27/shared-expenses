var expensesSelected = [];
var allExpenses = function () {
    var expensesAsJson = Expenses.find({settled: {$ne: true}}, {sort: {createdAt: -1}});
    return expensesAsJson.map(function(expenseAsJson) { return new Expense(expenseAsJson); });
};

Template.daily_expenses_list.helpers({
    expenses: allExpenses,
});

Template.daily_expenses_list.events({
    'click .toggle-all': function(event) {
        var checked = event.target.checked;
        $('.select-expense').prop('checked', checked);
        if(checked) {
            expensesSelected = allExpenses().map(function(e) { return e._id; });
        } else {
            expensesSelected = [];
        }
    },
    'click .select-expense': function(event) {
        var checked = event.target.checked;

        if(checked){
            expensesSelected.push(this._id);
        } else {
            expensesSelected.remove(this._id);
        }
    },
    'click .settle-selected': function(event) {
        if(expensesSelected.length > 0) {
            Meteor.call('settleExpenses', expensesSelected);
            expensesSelected = [];
        }
    }
});
