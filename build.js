const { app, BrowserWindow } = require('electron')
const path = require('path')
const { spawn } = require('child_process')

let mainWindow
let nodeProcess

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  // Start Node.js server
  nodeProcess = spawn('node', ['server/index.js'], {
    cwd: __dirname,
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      NODE_ENV: 'production'
    }
  })

  nodeProcess.on('error', (err) => {
    console.error('Failed to start server:', err)
  })

  // Load the app
  mainWindow.loadURL('http://localhost:3000')

  mainWindow.on('closed', function () {
    mainWindow = null
    if (nodeProcess) nodeProcess.kill()
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
    if (nodeProcess) nodeProcess.kill()
  }
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})