const { app, BrowserWindow } = require('electron')

let win;

function createWindow () {
  win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/logo.png`
  })


  win.loadURL(`file://${__dirname}/dist/Courses/index.html`)

  win.on('closed', function () {
    win = null
  })
}

app.on('ready', createWindow)


app.on('window-all-closed', function () {
  // Para macOs
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // Para macOS
  if (win === null) {
    createWindow()
  }
})
