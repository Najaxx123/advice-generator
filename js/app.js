const adviseZone = document.querySelector(".advice")
const adviceId = document.querySelector(".advice-id")

let intervalId

intervalId = setInterval(fetchAdvice, 10000);

function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice")

.then (function(res) {
    return res.json()
})

.then (function(result) {
    adviseZone.textContent = result.slip.advice
    adviceId.textContent = result.slip.id
    console.log(result)
})
.catch (function(err) {
    console.log("une erreur est la mon chef" ,err);
})

}


