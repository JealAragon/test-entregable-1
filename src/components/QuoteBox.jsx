import "./styles/QuoteBox.css"

const QuoteBox = ({phrase, handleChangeQuote }) => {
  return (
    <section className='quoteBox'>
       <article className='qouteBox__phrase'>
      <p> {phrase}</p>
    </article>
    <button className='quoteBox__btn'  onClick={handleChangeQuote} >Try your phrase</button>
    
  </section>
  )
}

export default QuoteBox
