// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动效果
    const links = document.querySelectorAll('nav a');
    
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }
    
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const yOffset = -80; // 考虑固定导航栏的高度
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }
    
    // 滚动时导航栏效果
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
            header.style.background = '#fff';
        }
    });
    
    // 当前年份更新
    const yearElement = document.querySelector('footer p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2023', currentYear);
    }
}); 