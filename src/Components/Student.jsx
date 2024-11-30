import PropTypes from 'prop-types'
import propTypes from 'prop-types'


const userdata=[{
  name:"Jagdish", status:false, city:"Salem", 
    role:"Frontend developer", skills:["UX/UI","Python","C++","Java","Software testing"],
    profile:"./Profile (3).jpg", follow:true
},
{
  name:"vinayak", status:true, city:"Bangaluru", 
    role:"backend developer", skills:["MySQL","MongoDB","Python","Django","Laravel"],
    profile:"./Profile (2).jpg", follow:true
},
{
  name:"Diya Samsha", status:true, city:"Mumbai", 
    role:"Software tester", skills:["Database","unit testing","Jira","SQA Testing","UI testing"],
    profile:"./Profile (1).jpeg", follow:true
}
]

function User(props){
  return(
    <>
    <div className="container">
    <div className="CardContainer">
      <h4 className={props.status?"status online" :"status offline"}>{props.status?"ONLINE":"OFFLINE"}</h4>
      <div  className="image"><img src={props.profile} alt="photo" />
      </div>
      
      <h3>{props.name}</h3>
      <h4>{props.city} </h4>
      <p>{props.role} </p>
      <div className="btns" >
        <button>Message</button>
        <button className={props.follow?"secondary ":" primary"} >{props.follow?"Following":"follow"}</button>
      </div>
      <div className="skills">skills</div>
      <ul>
       {props.skills.map((data,index)=>(<li key={index} >{data}</li> ))}
      </ul>

    </div>
    </div>
    </>
  )
}

const Student = () => {
  return ( <>
    {userdata.map((userdata,index)=>(<User key={index} name={userdata.name} status={userdata.status}
    city={userdata.city} role={userdata.role} skills={userdata.skills} profile={userdata.profile}
    follow={userdata.follow}
    />))}
    </>
  )
}

export default Student

User.propTypes={
  name:propTypes.string,city:propTypes.string,status:PropTypes.bool,
  role:propTypes.string,skills:propTypes.arrayOf(propTypes.string),
  profile:propTypes.string,
  follow:propTypes.bool,

}


