// js/room.js

document.addEventListener('DOMContentLoaded', () => {

    // === 基础元素获取 ===
    const monitor = document.getElementById('monitor');
    
    // 【重要】一加载进入这个页面，就让显示器通电亮起
    // 这样用户从首页跳转过来时，会看到一个开机效果直接进入房间
    monitor.classList.add('power-on');

    // === 音频元素获取 ===
    const bgmRoom = document.getElementById('bgm-room');
    const sfxNotice = document.getElementById('sfx-notice');
    const sfxCrash = document.getElementById('sfx-crash');
    
    // === 热区元素获取 ===
    const outsideTrigger = document.getElementById('zone-outside-trigger');
    const girlZone = document.getElementById('zone-girl');
    const booksZone = document.getElementById('zone-books'); // 获取 Books 热区
    const pcZone = document.getElementById('zone-pc');
    
    // === PC弹窗相关元素获取 ===
    const pcOverlay = document.getElementById('pc-overlay');
    const pcScreen = document.querySelector('.pc-screen');
    const secretFolderIcon = document.getElementById('secret-folder-icon');
    const secretDiaryWindow = document.getElementById('secret-diary-window');
    const closeSecretDiaryBtn = document.getElementById('close-secret-diary');

    // =========================================
    // 交互逻辑定义
    // =========================================

    // --- 场景: 日记交互 (跳转新页面) ---
    booksZone.addEventListener('click', (e) => {
        e.stopPropagation();
        // 跳转到独立的日记页面
        window.location.href = 'diary.html';
    });

    // --- 场景: PC 交互 ---
    pcZone.addEventListener('click', (e) => {
        e.stopPropagation();
        pcOverlay.classList.add('active');
    });
    pcOverlay.addEventListener('click', () => {
        pcOverlay.classList.remove('active');
    });
    pcScreen.addEventListener('click', (e) => {
        e.stopPropagation();
    });
    // [PC内部] 点击图标和关闭按钮
    secretFolderIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        secretDiaryWindow.classList.add('visible');
    });
    closeSecretDiaryBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        secretDiaryWindow.classList.remove('visible');
    });

    // --- 场景: 结局彩蛋触发 ---
    outsideTrigger.addEventListener('click', () => {
        console.log("踩雷了: TRAP!");
        document.body.classList.add('locked');
        if(bgmRoom.src) bgmRoom.pause();
        if(sfxNotice.src) sfxNotice.play();
        setTimeout(() => {
            girlZone.classList.add('approaching');
        }, 500);
        setTimeout(() => {
            if(sfxCrash.src) sfxCrash.play();
            monitor.classList.add('severe-glitch');
            setTimeout(() => {
                    monitor.classList.remove('severe-glitch');
                    monitor.classList.add('monitor-dead');
            }, 500);
        }, 3500);
    });

});
