window.onload = function() {
    let sectionOffset;
    changeOffset();
    window.addEventListener("resize", changeOffset);

    function changeOffset() {
        if (window.innerWidth >= 769) {
            sectionOffset = 50;
        } else {
            sectionOffset = 200;
        }
    }

    const scrollDown = (section) => {
        window.scrollTo({
            top: section.offsetTop - sectionOffset,
            behavior: 'smooth',
        });
    };  
    
    var sectionList = document.getElementById("navbar").getElementsByTagName("li");

    for (const sectionLink of sectionList) {
        const link = sectionLink.querySelector("a");
        const section = document.getElementById(link.innerText.toLowerCase() + "-section");
        link.onclick = function() {
            scrollDown(section);
        }
    }
}