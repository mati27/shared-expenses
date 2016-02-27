Array.prototype.remove = function (element) {
    var indexOfElement = this.indexOf(element);

    if (indexOfElement > -1) {
        this.splice(indexOfElement, 1);
    } else {
        throw Error('Element not found in array');
    }
};
