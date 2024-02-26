import React, { useState } from 'react'


export default function About(props) {

    // let [myStyle,setMyStyle]=useState(
    // {
    //     color: 'black',
    //     backgroundColor: 'white'
    // }
    // );
    let myStyle={
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'black':'white',
        border: '2px solid',
        borderColor: props.mode === 'dark'?'white':'black'
    }

  return (
            <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
                <h2 className='my-3'>About TextUtils</h2>
                <p>Welcome to TextUtils, your go-to platform for analyzing text effortlessly. We provide a range of tools to help you gain insights into your text content, and the best part? It's completely free to use!</p>
            <div className="accordion " id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            <strong>TextUtils</strong> allows you to analyze your text in various ways. Whether you need to check word count, find the most common words, or analyze sentiment, we've got you covered. Our intuitive interface makes it easy to input your text and receive valuable insights in no time.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            We believe in making powerful text analysis tools accessible to everyone. That's why TextUtils is entirely free to use. No hidden charges, no subscriptions – just a straightforward and user-friendly experience.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            <strong>TextUtils </strong>is designed to work seamlessly across different browsers. Whether you prefer Chrome, Firefox, Safari, or any other modern browser, you can access our tools without any compatibility issues. Analyze your text on the go, anytime, anywhere.

<p>Start exploring the capabilities of TextUtils today and make text analysis a breeze!</p>
     </div>
            </div>
        </div>
        </div>
        
                   </div>
  )
}
