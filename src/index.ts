import { app, BrowserWindow } from 'electron'

let mainWindow: BrowserWindow

app.on("ready", (): void => {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        show: false
    })

    mainWindow.loadFile("./pages/index.html")
    mainWindow.on("ready-to-show", (): void => mainWindow.show())
})