
import './Home.scss';
import {Link} from 'react-router-dom';
function Home(){
    return(
        <div id="home" className="container-fluid">

<div className="row" id="div1">
<div className="col-sm-12 col-md-12 col-6">
<div id="mainheading">
    <h1> Water Quality Monitoring System</h1>

</div>
</div>

    <div className="col-sm-3 col-md-3 col-6">
<Link to="/">
<div id="box" data-aos="fade-left">
      <div id="heading">
          <h2>Status </h2>
          <h3 style={{"color":"#4BFF73"}}> Active</h3>
      </div>
</div>
</Link>
   </div>


   <div className="col-sm-3 col-md-3 col-6">
<Link to="/ph" >
<div id="box" data-aos="zoom-out">
      <div id="heading">
          <h2>PH </h2>
          <h3> 6.8</h3>
      </div>
</div>
</Link>
   </div>



   <div className="col-sm-3 col-md-3 col-6">
<Link to="/td">
<div id="box" data-aos="zoom-out">
      <div id="heading">
          <h2>TDS </h2>
          <h3> 489 <span id="c">PPM</span></h3>
      </div>
</div>
</Link>
   </div>



   <div className="col-sm-3 col-md-3 col-6">
<Link to="/temp">
<div id="box" data-aos="fade-right">
      <div id="heading">
          <h2>Temp.</h2>
          <h3> 26.5 <span>°C</span></h3>
      </div>
</div>
</Link>
   </div>



   <div className="col-sm-3 col-md-3 col-6">
<Link to="/cond">
<div id="box" data-aos="fade-left"> 
      <div id="heading">
          <h2>Cond.</h2>
          <h3> 6.8</h3>
      </div>
</div>
</Link>
   </div>



   <div className="col-sm-3 col-md-3 col-6">
<Link to="/do">
<div id="box" data-aos="zoom-out">
      <div id="heading">
          <h2>DO </h2>
          <h3> 6.8</h3>
      </div>
</div>
</Link>
   </div>



   <div className="col-sm-3 col-md-3 col-6">
<Link to="/bod">
<div id="box" data-aos="zoom-out">
      <div id="heading">
          <h2>BOD </h2>
          <h3> 6.8</h3>
      </div>
</div>
</Link>
   </div>



   <div className="col-sm-3 col-md-3 col-6">
<Link to="/cod">
<div id="box" data-aos="fade-right">
      <div id="heading">
          <h2>COD</h2>
          <h3>  6.8</h3>
      </div>
</div>
</Link>
   </div>



 






</div>
        </div>

    );
}


export default Home;