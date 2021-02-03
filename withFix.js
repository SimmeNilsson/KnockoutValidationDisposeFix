function ViewModel() {
    const list = ko.observableArray([
        {
            name: 'Item 1',
            description: ko.observable().extend({required: true})
        },
        {
            name: 'Item 2',
            description: ko.observable().extend({required: true})
        },
        {
            name: 'Item 2',
            description: ko.observable().extend({required: true})
        }
    ]);

    function validate() {
        ko.validation.group(list, { deep: true, live: true, observable: true }).showAllMessages(true);
    }

    function clearErrors() {
        ko.validation.group(list, { deep: true, live: true, observable: true }).showAllMessages(false);
    }
    

    return {
        list: list,
        validate: validate,
        clearErrors: clearErrors
    }
}

ko.applyBindingsWithValidation(new ViewModel(), document.body);