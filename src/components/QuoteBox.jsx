import "./styles/QuoteBox.css"

const QuoteBox = ({phrase, handleChangeQuote }) => {
  return (
    <section className='quoteBox'>
    <button className='quoteBox__btn'  onClick={handleChangeQuote} >Try your phrase</button>
    <article className='qouteBox__phrase'>
      <p> {phrase}</p>
    </article>
  </section>
  )
}

export default QuoteBox
