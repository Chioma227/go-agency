
import React from "react";
import ReactDOM from "react-dom";
import App from './App'

function Index() {
  return (
    <div>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Index />)

