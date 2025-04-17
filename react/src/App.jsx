import React from 'react';
import TeamMemberCard from './components/TeamMemberCard';

function App() {
  return (
    <div className='App'>
      <h1>Team Member</h1>
      <TeamMemberCard name="john Doe" title="Software Engineer"/>
      <TeamMemberCard name="Alice" title="Product Manager"/>
      <TeamMemberCard name="Bob" title="Designer"/>
    </div>
  )
}
export default App
