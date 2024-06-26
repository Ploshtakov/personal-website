let counter = 0

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById("increase").addEventListener('click', increase)
    document.getElementById('reset').addEventListener('click', reset)
    document.getElementById('reset').addEventListener('dblclick', instant_reset)
    document.getElementById('reset').addEventListener('mouseover', change_cursor)
    document.getElementById('decrease').addEventListener('click', decrease)
    document.getElementById('decrease').addEventListener('mouseover', change_cursor)
})

function increase () {
    counter++
    update_counter()
}
function decrease () {
    if (counter > 0) {
        counter--
        update_counter()

    }
}
function reset () {
    setTimeout(function () {
        if (counter > 0) {
            if (confirm("Are you sure you want to reset?")) {
                counter = 0
                update_counter()
            }
        }
    }, 200)

}
function instant_reset () {
    counter = 0
    update_counter()
}
function update_counter() {
    document.getElementById("counter").innerHTML = counter
    change_cursor()
}

function change_cursor() {
    if (counter == 0) {
        document.getElementById("decrease").style.cursor = "not-allowed"
        document.getElementById("reset").style.cursor = "not-allowed"
    } else {
        document.getElementById("decrease").style.cursor = "grab"
        document.getElementById("reset").style.cursor = "grab"
    }

}
