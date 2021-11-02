const education = document.getElementById("education")
const family = document.getElementById("family")
const caste = document.getElementById("caste")
const skills = document.getElementsByClassName("skills")
const age = document.getElementsByClassName("age")
const reputation = document.getElementsByClassName("reputation")

const calculate = () => {

    let name = document.getElementById("name")
    let love_letter = document.getElementsById("letter")
    let price = document.getElementById("bid")

    if (price != 0) {
        price *= Number(education.value)
        price *= Number(family.value)
        price += Number(caste.value)
        price = getSkillsValue(skills, price)
        price = getAgeValue(age, price)

        if (document.reputation.option[0].checked == true) {
            price *= document.reputation.option[0].value
        }
        if (document.reputation.option[1].checked == true) {
            price *= document.reputation.option[1].value
        }
        if (document.reputation.option[2].checked == true) {
            price *= document.reputation.option[2].value
        }

        let person = {
            bride_name: name,
            bride_price: price,
            letter_to_bride: love_letter
        }

        document.getElementById("sum").innerHTML = person.bride_name + person.bride_price + "$" + person.letter_to_bride
    }

    else {
        alert("Starting bid was not filled in")
    }
}

const getSkillsValue = (node_list, price) => {
    node_list.array.filterReduce(element => {
        if (element.checked) {
            price += Number(element.value)
        }
    })
    return price
}

const getAgeValue = (node_list, price) => {
    node_list.array.forEach(element => {
        if (element.checked) {
            price *= Number(element.value)
        }
    })
    return price
}

document.getElementById("sum").addEventListener("click", function () {
    calculate()
})