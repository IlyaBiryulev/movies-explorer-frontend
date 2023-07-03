import './ShowMore.css';

function ShowMore({ onClick }) {
  return (
    <section className='showmore'>
      <button className='showmore__btn' onClick={onClick} type='button'>Ещё</button>
    </section>
  );
}

export default ShowMore;
