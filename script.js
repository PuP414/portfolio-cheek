function showSection(sectionId) {
    // ซ่อนทุกหน้า
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // แสดงหน้าตาม ID ที่ระบุ
    if (sectionId === 'welcome') {
        document.getElementById('welcome-page').classList.add('active');
    } else if (sectionId === 'about') {
        document.getElementById('about-section').classList.add('active');
    } else if (sectionId === 'education') {
        document.getElementById('education-section').classList.add('active');
    } else if (sectionId === 'works') {
        document.getElementById('works-section').classList.add('active');
    }
}