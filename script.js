document.addEventListener("DOMContentLoaded", function() {
    let currentAddTask = 0;
    let currentEarn = 0;

    const contentAddTasks = ['add_task1', 'add_task2'];

    const contentEarns = ['earn_1', 'earn_2', 'earn_3'];

    const btnBack = document.getElementById('btn_back');
    const btnNext = document.getElementById('btn_next');
    const imgBack = btnBack.querySelector('img');
    const imgNext = btnNext.querySelector('img'); 

    const indicatorsContainer = document.querySelector('.list_point_bot');

    function showDiv(index) {
        contentAddTasks.forEach(id => {
            content = document.getElementById(id)
            if(content != null)
                document.getElementById(id).style.display = 'none';
        });
        content1 = document.getElementById(contentAddTasks[index])
        if(content1 != null){
            document.getElementById(contentAddTasks[index]).style.display = 'block';
            updateButtonStates('task');
            updateIndicators(index, 'task');
        }
    }

    function showDiv1(index) {
        contentEarns.forEach(id => {
            content = document.getElementById(id)
            if(content != null)
                document.getElementById(id).style.display = 'none';
        });

        content1 = document.getElementById(contentEarns[index])
        if(content1 != null){
            document.getElementById(contentEarns[index]).style.display = 'block';
            console.log(index)
            if(index === contentEarns.length - 1){
                document.getElementById('earn_0').style.display = 'none'
            }
            else{
                document.getElementById('earn_0').style.display = 'flex'
            }
            updateButtonStates('earn');
            updateIndicators(index, 'earn');
        }
    }

    function updateButtonStates(page) {
        let index = currentAddTask
        let content = contentAddTasks
        if(page == 'earn'){
            index = currentEarn
            content = contentEarns
        }
        if (index === 0) {
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

        if (index === content.length - 1) {
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

    function updateIndicators(index, page) {
        // Xóa tất cả các chỉ báo hiện tại
        indicatorsContainer.innerHTML = '';

        if(page == 'task'){
            contentAddTasks.forEach((id, idx) => {
                const indicator = document.createElement('img');
                if (idx === index) {
                    indicator.src = './icon/point_red.svg'; // Điểm chỉ báo đang hoạt động
                } else {
                    indicator.src = './icon/point_dark.svg'; // Điểm chỉ báo không hoạt động
                }
                indicatorsContainer.appendChild(indicator);
            });
        }else{
            contentEarns.forEach((id, idx) => {
                const indicator = document.createElement('img');
                if (idx === index) {
                    indicator.src = './icon/point_red.svg'; // Điểm chỉ báo đang hoạt động
                } else {
                    indicator.src = './icon/point_dark.svg'; // Điểm chỉ báo không hoạt động
                }
                indicatorsContainer.appendChild(indicator);
            });
        }
    }

    showDiv(currentAddTask);
    showDiv1(currentEarn);
    btnNext.addEventListener('click', function() {
        if (currentAddTask < contentAddTasks.length - 1) {
            currentAddTask++;
            showDiv(currentAddTask);
        }
        if (currentEarn < contentEarns.length - 1) {
            currentEarn++;
            showDiv1(currentEarn);
        }
    });

    btnBack.addEventListener('click', function() {
        if (currentAddTask > 0) {
            currentAddTask--;
            showDiv(currentAddTask);
        }
        if (currentEarn > 0) {
            currentEarn--;
            showDiv1(currentEarn);
        }
    });



    const slider = document.getElementById('pointSlider');
    const selectedPoint = document.querySelector('.selected-point');
    const sliderFill = document.querySelector('.slider-fill');
    const endPointImage = document.getElementById('endPointImage');
    function updateSelectedPoint(value) {
        selectedPoint.style.left = `calc(${value}% - 10px)`;
        sliderFill.style.width = `${value}%`;

        if (value == 100) {
            endPointImage.style.display = "none"
        } else {
            endPointImage.style.display = "block"
        }
    }

    let initialValue = slider.value;
    updateSelectedPoint(initialValue);

    slider.addEventListener('input', (event) => {
        let value = event.target.value;
        updateSelectedPoint(value);
    });
});