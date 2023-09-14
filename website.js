function toggleText() {
    const textElement = document.getElementsByClassName("textSwitch")[0];
    if (textElement.textContent === "Welcome") {
        textElement.textContent = "To my portfolio";
    }else {
        textElement.textContent = "Welcome";
    }
}
    setInterval(toggleText, 4000); // Change text every 5 seconds
    
    document.addEventListener("DOMContentLoaded", function () {
        const textElement = document.querySelectorAll(".text");
        const text = "I am someone who loves programming. I want to learn as much as I can about computers, software, and all the things related to my field. This is because I see software in everything I interract with.";
    
        let charIndex = 0;
        function typeText() {
            textElement.forEach((element) => { // Loop through each element
                element.textContent = text.substring(0, charIndex);
            });
            charIndex++;
            if (charIndex <= text.length) {
                setTimeout(typeText, 50);
            }
        }
        typeText();
    });
    let array = {};

    array = document.querySelectorAll("item");
        
    // for(let i = 0; i < array.length; i++){
    //     array[i].style.background = "green";
    // }
    array.forEach(node => { node.style.height = "4000"; });

