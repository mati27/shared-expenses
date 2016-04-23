var expensesSelected = [];
var expenseCollection = new ExpenseCollection();

Template.daily_expenses_list.helpers({
    expenses: expenseCollection.findAll
});

Template.daily_expenses_list.events({
    'click .toggle-all': function(event) {
        var checked = event.target.checked;
        $('.select-expense').prop('checked', checked);
        if(checked) {
            expensesSelected = expenseCollection.findAll().map(function(e) { return e._id; });
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
            expenseCollection.settleMultipleExpenses(expensesSelected);
            expensesSelected = [];
        }
    }
});
