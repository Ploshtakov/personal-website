document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("reverse").addEventListener('click', get_lines)
    document.getElementById('copy').addEventListener('click', copy)
})


function get_lines() {
    let lines = document.getElementById("reverse-input").value
    reverse(lines)
}

function reverse(lines) {
    let reversed_lines = []
    new_lines = lines.split("\n")
    let count_of_lines = new_lines.length

    for (let i = count_of_lines-1; i > -1; i--) {
        reversed_lines.push(new_lines[i])
    }

    reversed_lines = reversed_lines.join("\n")
    display_lines(reversed_lines)
}

function copy () {
    result = document.getElementById("reverse-input").value
    navigator.clipboard.writeText(result);
}

function display_lines(reversed_lines) {
    console.log(reversed_lines)
    document.getElementById("reverse-input").value = reversed_lines

}