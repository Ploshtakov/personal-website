
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
           'w', 'x', 'y', 'z']
let uletters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
           'W', 'X', 'Y', 'Z']
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let chars = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '.', '/', ':', ';', '=', '?', '@', '[',
         '\\', ']', '^', '_', '`', '{', '}']



document.addEventListener('DOMContentLoaded', function() {
    let length = document.getElementById('length').value
    display_length(length)
    document.getElementById("generate").addEventListener('click', generate)
    document.getElementById("copy").addEventListener('click', copy)
})

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generate() {
    let all_chars = []
    let password = []
    length = document.getElementById('length').value

    if (document.getElementById('uabc').checked) {
        all_chars = all_chars.concat(uletters)
    }
    if (document.getElementById('labc').checked) {
        all_chars = all_chars.concat(letters)
    }
    if (document.getElementById('123').checked) {
        all_chars = all_chars.concat(numbers)
    }
    if (document.getElementById('!@#').checked) {
        all_chars = all_chars.concat(chars)
    }

    if (all_chars.length > 0) {
        for (let i = length; i > 0; i--) {
            random_index = getRandomInt(all_chars.length)
            password.push(all_chars[random_index])
        }
        password = password.join("")
        display_password(password)

    } else {
        display_password("Empty!")
    }
}

function copy () {
    result = document.getElementById("password-label").innerHTML
    navigator.clipboard.writeText(result)
}

function display_length(length) {
    document.getElementById("length-label").innerHTML = length
}

function display_password(password) {
    document.getElementById("password-label").innerHTML = password
}