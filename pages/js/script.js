const settings = { 
    video: true, 
    audio: false 
}

navigator.mediaDevices.getUserMedia(settings)
    .then((stream) => {
        const video = document.getElementById('video')
        video.srcObject = stream
        video.play()
    })
    .catch((error) => {
        console.error(error)
        alert(`Sem permissão para acessar a webcam`)
    })