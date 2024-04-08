import './card.styles.css';

const card = ({ monster }) => {
        const { id, name, email } = monster;

                   
                    return (
                        <div className='card' key={id}>
                            <img alt={`monster ${name}`} src={`https://robohash.org/${id}}?set=set2&size=180x180`}/>
                            <h2>{name}</h2>
                            <p>{email}</p>
                            </div>
                    )
             }
                

export default card;