import React from 'react';

function Cform() {
    return (
      <form className='p-3'>
         <div class="mb-3">
        <label for="exampleInputName1" class="form-label" >Name</label>
        <input type="Name" class="form-control" id="exampleInputName1" style={{backgroundColor:'transparent',border:'1px solid #43698f'}}/>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" style={{backgroundColor:'transparent',border:'1px solid #43698f'}}/>
        </div>
        <div class="mb-3">
        <label for="exampleInputMessage1" class="form-label">Message </label>
        <textarea input type="Message" class="form-control" id="exampleInputMessage1" style={{backgroundColor:'transparent',border:'1px solid #43698f'}}/>
        </div>
      
      <button type="submit" className="btn btn-dark rounded-pill" style={{border:'1px solid blue',width:'100px',marginLeft:"250px"}}>Submit</button>
    </form>
      );
}

export default Cform;