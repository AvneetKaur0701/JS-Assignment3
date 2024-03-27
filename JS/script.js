document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    var studentInfo = document.getElementById('studentInfo');
    var studentId = "200516907";
    var studentName = "Avneet Kaur";
    studentInfo.textContent = "Student ID: " + studentId + ", Name: " + studentName;


    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var formData = {
            firstName: form.fname.value,
            lastName: form.lname.value,
            mobileNumber: form.mobile.value,
            emailAddress: form.email.value,
            pizzaSize: form.size.value,
            quantity: form.Quantity.value,
            paymentMethod: form.payment.value,
            cheese: getSelectedValue('cheese'),
            sauce: getSelectedValue('sauce'),
            drink: getSelectedValue('drink'),
            toppings: getSelectedCheckboxesValues('toppings'),
            instructions: form.instructions.value
        };

        var message = "Order Summary:\n\n";
        for (var key in formData) {
            message += capitalizeFirstLetter(key) + ": " + formData[key] + "\n";
        }

        alert(message);
        form.reset();
    });

    var footer = document.getElementById('footer');
    footer.appendChild(paragraph);

    function getSelectedValue(name) {
        var selectedOption = form.querySelector('[name="' + name + '"]:checked');
        return selectedOption ? selectedOption.nextSibling.nodeValue.trim() : "";
    }

    function getSelectedCheckboxesValues(name) {
        var checkboxes = form.querySelectorAll('[name="' + name + '"]:checked');
        var values = [];
        checkboxes.forEach(function (checkbox) {
            values.push(checkbox.nextSibling.nodeValue.trim());
        });
        return values.join(", ");
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});