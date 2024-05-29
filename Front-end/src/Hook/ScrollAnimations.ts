const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if( entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
        
    });
});


const TopProductsElements = document.querySelectorAll('.hidden');
TopProductsElements.forEach((el) => observer.observe(el));