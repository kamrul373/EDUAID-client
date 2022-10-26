const handleBtn = (e) => {
    const elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function (e) {
        e.classList.remove("active", "text-white");
    });
    e.target.classList.add("active", "text-white")
}

export default handleBtn;