import React from 'react';
import TeamCard from './TeamCard';

function App() {
  return (
    <div className="  p-5  " >
    <h1 className="text-pink-500 text-4xl font-bold ml-10 ">Meet our Team </h1>
<p class="text-white ml-10 text-xl " > "Alone we can do so little; together we can do so much." – Helen Keller </p>
    
    <div  class=" flex flex-wrap shadow-lg  " >
      
       <TeamCard name="Vishal" title="CEO" photo="https://cdn.discordapp.com/attachments/944189291427430421/946420617199124500/vkjpg.jpg" linkdin="https://www.linkedin.com//" twitter="https://twitter.com/login" ></TeamCard>
      
<TeamCard name="Christina" title="HR-Marketing" photo="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" linkdin="https://www.linkedin.com//"  twitter="https://twitter.com/login" ></TeamCard>
      
       <TeamCard name="James" title="Senior Associate" photo="https://images.unsplash.com/photo-1604336732494-d8386c7029e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" linkdin="https://www.linkedin.com//" twitter="https://twitter.com/login"></TeamCard>
      
       <TeamCard name="Anthony" title="Web Designer" photo="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" linkdin="https://www.linkedin.com//" twitter="https://twitter.com/login"></TeamCard>
      
       <TeamCard name="Kayra" title="Manager" photo="https://images.unsplash.com/photo-1606335192038-f5a05f761b3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" linkdin="https://www.linkedin.com//" twitter="https://twitter.com/login"></TeamCard>
      
       <TeamCard name="Abby Savage" title="Web Developer" photo="https://images.unsplash.com/photo-1629467057571-42d22d8f0cbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80" linkdin="https://www.linkedin.com//" twitter="https://twitter.com/login"></TeamCard> 
      
     <TeamCard name="Ben Parker" title="Chief Marketing Officer" photo="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" linkdin="https://www.linkedin.com//" twitter="https://twitter.com/login"></TeamCard>
      
<span class="w-80 shrink-0" >  </span>
      
    </div>
   </div>
 
  );
}
export default App;



  