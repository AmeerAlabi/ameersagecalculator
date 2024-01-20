document.addEventListener('DOMContentLoaded', function () {
    // input
    const dayInp = document.getElementById("day");
    const monthInp = document.getElementById("month");
    const yearInp = document.getElementById("year");

    // output
    const dayOtp = document.getElementById("DD");
    const monthOtp = document.getElementById("MM");
    const yearOtp = document.getElementById("YY");

    // error
    const errorDay = document.getElementById("errorDay");
    const errorMonth = document.getElementById("errorMonth");
    const errorYear = document.getElementById("errorYear");

    // submit button
    const submitBtn = document.querySelector(".submit_btn");

    let isValid = true;

    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        CalculateDate();
    });

    dayInp.addEventListener("input", function (e) {
        if (+dayInp.value > 31) {
            errorDay.textContent = "Must be a valid date";
            isValid = false;
            return;
        } else {
            isValid = true;
            errorDay.textContent = "";
        }

        if (+dayInp.value === 0) {
            isValid = false;
            errorDay.textContent = "This field is required";
            return;
        } else {
            errorDay.textContent = "";
        }
    });

    monthInp.addEventListener("input", function (e) {
        if (+monthInp.value > 12) {
            errorMonth.textContent = "Must be a valid month";
            isValid = false;
            return;
        } else {
            isValid = true;
            errorMonth.textContent = "";
        }

        if (+monthInp.value === 0) {
            isValid = false;
            errorMonth.textContent = "This field is required";
            return;
        } else {
            errorMonth.textContent = "";
        }
    });

    yearInp.addEventListener("input", function (e) {
        if (+yearInp.value > 2023) {
            errorYear.textContent = "Must be a valid year";
            isValid = false;
            return;
        } else {
            isValid = true;
            errorYear.textContent = "";
        }

        if (+yearInp.value === 0) {
            isValid = false;
            errorYear.textContent = "This field is required";
            return;
        } else {
            errorYear.textContent = "";
        }
    });

    function CalculateDate() {
        if (isValid) {
            let birthday = `${monthInp.value}/${dayInp.value}/${yearInp.value}`;
            let birthdayObj = new Date(birthday);

            if (isNaN(birthdayObj.getTime())) {
                alert("Invalid date");
                return;
            }

            let ageDiffMill = Date.now() - birthdayObj;
            let ageDate = new Date(ageDiffMill);
            let ageYears = ageDate.getFullYear() - 1970;
            let ageMonth = ageDate.getUTCMonth();
            let ageDay = ageDate.getUTCDate() - 1;

            dayOtp.textContent = ageDay;
            monthOtp.textContent = ageMonth;
            yearOtp.textContent = ageYears;
        } else {
            alert("Error: Invalid input");
        }
    }
});
