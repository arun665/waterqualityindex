
import './accordion.scss';

function accordion(){
return(<>


<div class="container" id="accordiononeport">
<div id="div2">

<h1>  <span>Temperature</span></h1>

  


  
    </div>
  <div id="accordion">
    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapseOne" data-target="#collapseOne"
                            aria-expanded="true" aria-controls="faq1">
       Last 24 hours
        </div>
      </div>
      <div id="collapseOne" class="collapse" data-parent="#accordion">
        <div class="card-body">
    <table>
      <tr>
        <td> Lorem ipsum  </td>
        <td> pH -  6.2 </td>
      </tr>
      <tr>
        <td> Lorem ipsum  </td>
        <td> pH -  6.2 </td>
      </tr>
      <tr>
        <td> Lorem ipsum  </td>
        <td> pH -  6.2 </td>
      </tr>
      <tr>
        <td> Lorem ipsum  </td>
        <td> pH -  6.2 </td>
      </tr>
    </table>
    
        </div>
      </div>
    </div>
 
    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapse2" data-target="#collapse2"
                            aria-expanded="true" aria-controls="faq1">
       Last 7 days
        </div>
      </div>
      <div id="collapse2" class="collapse" data-parent="#accordion">
        <div class="card-body">
    <table>
      <tr>
        <td> Lorem ipsum  </td>
        <td> pH -  6.2 </td>
      </tr>
      <tr>
        <td> Lorem ipsum  </td>
        <td> pH -  6.2 </td>
      </tr>
      <tr>
        <td> Lorem ipsum  </td>
        <td> pH -  6.2 </td>
      </tr>
      <tr>
        <td> Lorem ipsum  </td>
        <td> pH -  6.2 </td>
      </tr>
    </table>
    
        </div>
      </div>
    </div>




    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapse3" data-target="#collapse3"
                            aria-expanded="true" aria-controls="faq1">
       Last 1 month
        </div>
      </div>
      <div id="collapse3" class="collapse" data-parent="#accordion">
        <div class="card-body">
    <table>
      <tr>
        <td> Lorem ipsum  </td>
        <td> pH -  6.2 </td>
      </tr>
      <tr>
        <td> Lorem ipsum  </td>
        <td> pH -  6.2 </td>
      </tr>
      <tr>
        <td> Lorem ipsum  </td>
        <td> pH -  6.2 </td>
      </tr>
      <tr>
        <td> Lorem ipsum  </td>
        <td> pH -  6.2 </td>
      </tr>
    </table>
    
        </div>
      </div>
    </div>


    <div class="card">
      <div class="card-header" >
        <div class="card-link btn-header-link collapsed" data-toggle="collapse" href="#collapse3" data-target="#collapse4"
                            aria-expanded="true" aria-controls="faq1">
       Last 1 year
        </div>
      </div>
      <div id="collapse4" class="collapse" data-parent="#accordion">
        <div class="card-body">
    <table>
      <tr>
        <td> Lorem ipsum  </td>
        <td> pH -  6.2 </td>
      </tr>
      <tr>
        <td> Lorem ipsum  </td>
        <td> pH -  6.2 </td>
      </tr>
      <tr>
        <td> Lorem ipsum  </td>
        <td> pH -  6.2 </td>
      </tr>
      <tr>
        <td> Lorem ipsum  </td>
        <td> pH -  6.2 </td>
      </tr>
    </table>
    
        </div>
      </div>
    </div>



  </div>
</div>
</>)
}


export default accordion;
