export default {
    order: function (input) {
        var results = [],
            objectKey;

        for (objectKey in input) {
            results.push(input[objectKey]);
        }

        results.sort(function (field1, field2) {
            return field1.order() - field2.order();
        });

        return results;
    }
};
