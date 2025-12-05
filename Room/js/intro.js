// js/intro.js

// 等待页面加载完成
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');

    // 监听开始按钮点击
    startBtn.addEventListener('click', () => {
        // 直接跳转到房间页面
        window.location.href = 'room.html';
    });
});
