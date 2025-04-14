const drums = document.querySelectorAll('.drum');
let premiumPlayed = false

drums.forEach(drum => {
    drum.addEventListener('click', () => {
        const soundSrc = drum.getAttribute('data-sound')
        const isPremium = drum.getAttribute('data-premium')
        if (isPremium && premiumPlayed) {
            alert("Premium sound უკვე დაკრულია!")
            return;
        }
        if (isPremium) {
            premiumPlayed = true
        }
        const audio = new Audio(soundSrc)
        audio.play()
    })
})

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'a': document.getElementById('clap').click(); break
        case 's': document.getElementById('snare').click(); break
        case 'd': document.getElementById('kick').click(); break
        case 'f': document.getElementById('hihat').click(); break
        case 'g': document.getElementById('premium').click(); break
    }
})
