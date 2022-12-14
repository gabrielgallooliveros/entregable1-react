import { useState } from "react"
import  QuoteBox  from "./componets/QuoteBox"
import quotesDB from "./db/quotes.json"
import colors  from "./db/colors.js"


function App() {
    const getRandom  =  (array) => {
    const randomIndex = Math.floor(array.length*Math.random())
  return array[randomIndex]

  }

  const [quote, setQuote] = useState(getRandom(quotesDB))
  const [color, setColor] = useState(getRandom(colors))

  const getNewValues = () => {
  const newQuote = getRandom (quotesDB)
  const newColor = getRandom(colors)
  setQuote(newQuote)
  setColor(newColor)
  }

  const backgroundObject = {
    backgroundColor : color
  }

  const colorObject = {
    color: color
  }

  return (
    <div className="App" style={backgroundObject}>
      <QuoteBox quote={quote} getNewValues = {getNewValues} backgroundObject= {backgroundObject} colorObject={colorObject}/>
    </div>
  )
}

export default App
