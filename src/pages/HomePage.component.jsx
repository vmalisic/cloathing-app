import React from 'react'
import Directory from '../component/directory/directory.component'
import './homepage-styles.scss';


const HomePage = (props) =>{

  return (
    <div className="homepage">
       <h1>Clothing</h1>
       <Directory />
       <button className="btn btn-primary" onClick = {() => props.history.push('/topics')}>Next page</button>

    </div>
  )
}

export default HomePage;