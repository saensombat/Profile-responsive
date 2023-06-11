const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
    // เปิด/ปิดการแสดงผลของ dropDownMenu
    dropDownMenu.classList.toggle('open')

    // ตรวจสอบว่า dropDownMenu มีคลาส 'open' หรือไม่
    const isOpnen = dropDownMenu.classList.contains('open')

    // เปลี่ยนไอคอนของ toggleBtnIcon ตามสถานะของ dropDownMenu
    toggleBtnIcon.classList = isOpnen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}