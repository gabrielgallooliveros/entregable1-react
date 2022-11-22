import QuotenButton from "./QuotenButton"

const QuoteBox = ({quote, getNewValues, backgroundObject, colorObject}) => {
console.log(quote)
  return (
    <article className="quoteBox">

    <p style={colorObject}>{quote.quote}</p>
    <h4 style={colorObject}>{quote.author}</h4>
<section className="quoteBox-footer">
<QuotenButton getNewValues={getNewValues} backgroundObject={backgroundObject}/>
<i style={colorObject} className ='bx bxs-quote-left'></i>
</section>

    </article>
  )
}
export default QuoteBox
