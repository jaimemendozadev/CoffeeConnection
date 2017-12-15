const mongoose = require('mongoose');
const Team = mongoose.model('team');

function NewTeam( {name, req} ){
  const team = new Team ({ name });
  return Team.save((err,result)=> {
  if (err) {console.log("--Team save failed " + err)}
  console.log("+++TodoItem saved successfully "+ team.name);
});
};

module.exports = { NewTeam };
