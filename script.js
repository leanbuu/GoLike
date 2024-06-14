document.addEventListener("DOMContentLoaded", function() {
    let currentAddTask = 0;

    const contentAddTasks = ['add_task1', 'add_task2'];

    const contentEarns = ['earn_1', 'earn_2', 'earn_3'];

    const btnBack = document.getElementById('btn_backAddTask');
    const btnNext = document.getElementById('btn_nextAddTask');
    const imgBack = btnBack.querySelector('img');
    const imgNext = btnNext.querySelector('img'); 

    const indicatorsContainer = document.querySelector('.list_point_bot_addTask');

    function showDiv(index) {
        contentAddTasks.forEach(id => {
            document.getElementById(id).style.display = 'none';
        });

        document.getElementById(contentAddTasks[index]).style.display = 'block';
        updateButtonStates();
        updateIndicators(index);
    }

    function updateButtonStates() {
        if (currentAddTask === 0) {
            btnBack.classList.remove('bg_custom_bot_show');
            btnBack.classList.add('bg_custom_bot_hide');
            btnBack.classList.remove('custom_text22');
            btnBack.classList.add('custom_text30');
            imgBack.src = './icon/btn_botLeft.svg'; 
        } else {
            btnBack.classList.remove('bg_custom_bot_hide');
            btnBack.classList.add('bg_custom_bot_show');
            btnBack.classList.remove('custom_text30');
            btnBack.classList.add('custom_text22');
            imgBack.src = './icon/btn_botLeft1.svg'; 
        }

        if (currentAddTask === contentAddTasks.length - 1) {
            btnNext.classList.remove('bg_custom_bot_show');
            btnNext.classList.add('bg_custom_bot_hide');
            btnNext.classList.remove('custom_text22');
            btnNext.classList.add('custom_text30');
            imgNext.src = './icon/btn_botRight1.svg'; 
        } else {
            btnNext.classList.remove('bg_custom_bot_hide');
            btnNext.classList.add('bg_custom_bot_show');
            btnNext.classList.remove('custom_text30');
            btnNext.classList.add('custom_text22');
            imgNext.src = './icon/btn_botRight.svg'; 
        }
    }

    function updateIndicators(index) {
        // Xóa tất cả các chỉ báo hiện tại
        indicatorsContainer.innerHTML = '';

        // Thêm các chỉ báo mới dựa trên thẻ hiện tại
        contentAddTasks.forEach((id, idx) => {
            const indicator = document.createElement('img');
            if (idx === index) {
                indicator.src = './icon/point_red.svg'; // Điểm chỉ báo đang hoạt động
            } else {
                indicator.src = './icon/point_dark.svg'; // Điểm chỉ báo không hoạt động
            }
            indicatorsContainer.appendChild(indicator);
        });
    }

    showDiv(currentAddTask);
    btnNext.addEventListener('click', function() {
        if (currentAddTask < contentAddTasks.length - 1) {
            currentAddTask++;
            showDiv(currentAddTask);
        }
    });

    btnBack.addEventListener('click', function() {
        if (currentAddTask > 0) {
            currentAddTask--;
            showDiv(currentAddTask);
        }
    });
});