import Navbar from "./Navbar";


function App() {

  var aptech = "Aptech Site Center"


  var rest = ['halwa pori','bhindi','daal chawal']

  var std = {
    firstName : "Ali",
    lastName : "Qasim",
    campus : "aptechSiteCenter",
    hobbies : ['cricket','gaming','avoid coding']
  }

console.log(std);



return(

  <div className="navbar " id="" >
<Navbar name="ahad" batch="2405a" rest={rest} std={std}  />

 <h1>{aptech}</h1>
 {/* <p>Food Items : {rest}</p> */}
 <h3>Object Data : {std.firstName}</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit quibusdam eos commodi perspiciatis? Officia, autem error. Accusamus, illo. Quas, itaque! Ratione libero impedit non explicabo porro deserunt fugit sint, nihil doloremque omnis exercitationem itaque sunt, ea recusandae, tenetur nobis quam aut eos quo? Cumque, labore sint magni vitae hic illum iusto soluta aspernatur ullam odit veniam animi accusamus architecto accusantium a placeat quis dolorum eos dolores nisi dolorem? Dolorem fugiat, voluptatum omnis laudantium veniam tenetur distinctio repellendus accusamus qui culpa aut optio unde accusantium dolores debitis saepe. Ex tempora soluta nesciunt aliquam eligendi voluptas dolore autem, officiis labore, qui a non doloribus exercitationem totam animi minus itaque. Dignissimos repellendus temporibus similique quibusdam laboriosam tenetur! Unde ullam at quam odit fugit accusantium impedit et magni corrupti nam, amet quasi distinctio explicabo provident corporis animi, dignissimos id. Voluptatem quas, distinctio ducimus culpa nihil obcaecati sit saepe? Eos fugit, excepturi provident veniam pariatur earum ut temporibus nesciunt omnis quibusdam! Nobis, enim? Praesentium assumenda magni quod, quam incidunt facilis tenetur. Autem, voluptas illo molestias modi saepe deleniti optio iste minus ad quaerat accusamus dolorem voluptates inventore iusto, velit quas nobis similique? Sint esse illum debitis ut doloremque vitae quos laborum necessitatibus atque impedit. Voluptates!</p>
<h1>Hello world</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga vitae laudantium voluptatem dignissimos necessitatibus libero, nihil sit neque similique corrupti?</p>
  </div>
  )
}

export default App
