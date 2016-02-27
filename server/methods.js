Meteor.methods({
    'addExpense': function(newExpense) {
        _.extend(newExpense, {createdAt: new Date()});
        Expenses.insert(newExpense);
    },
    'settleExpenses': function(expensesIds) {
        Expenses.update({_id: {$in: expensesIds}}, { $set: { settled: true }}, { multi: true });
    }
});
